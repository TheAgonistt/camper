const express = require('express')
const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')
let fs = require('fs');

const app = express()
const attributes = ['firstname', 'lastname', 'email', 'msg', 'phone', 'poste', 'file']

app.use(express.json())

app.get('/', function (req, res) {
	res.status(405).json({ error: '405 Method Not Allowed' })
})

app.post('/', function (req, res) {
	const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
	const someInvalid = sanitizedAttributes.some(r => !r)

	if (someInvalid) {
		return res.status(422).json({ 'error': 'Veuillez remplir tous les champs' })
	}

	sendMail(...sanitizedAttributes)
	res.status(200).json({ 'message': 'OH YEAH, MESSAGE ENVOYÉ' })
})

module.exports = {
	path: '/api/contact',
	handler: app
}

const validateAndSanitize = (key, value) => {
	const rejectFunctions = {
		firstname: v => v.length < 1,
		lastname: v => v.length < 1,
		email: v => !validator.isEmail(v) && v.length < 5,
		msg: v => v.length < 1,
		phone: v => v.length < 1,
		poste: v => v.length < 1,
		file: v => v.length < 1,
	}

	// if object has key and function returns false, return sanitized input. Else, return false
	return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}


const sendMail = (firstname, lastname, email, msg, phone, poste, file) => {
	let transporter = nodemailer.createTransport({
		host: 'smtp.sendgrid.net',
		port: 587,
		secure: false,
		auth: {
			user: 'apikey',
			pass: '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'
		},
	})

	let fileType = '';
	const filePath = file;
	const dot = filePath.lastIndexOf('.');
	fileType = filePath.substring(dot + 1);

	let mailOptions = {
		from: 'support@acolyte.ws',
		to: 'info@acolyte.ws,christopher@acolyte.ws,carolane@acolyte.ws',
		subject: `Change la game: nouveau CV (${poste})`,
		html: Template(firstname, lastname, email, msg, phone, poste),
		attachments: [
			{
				filename: `${poste}-${firstname}-${lastname}-${Date.now()}.${fileType}`,
				content: fs.createReadStream(file),
			}
		]
	}

	// verify connection configuration
	transporter.verify(function(error, success) {
		if (error) {
			console.log('connection error: ', error);
		} else {
			console.log("Server is ready to take our messages");
		}
	});

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) console.log(error)
	})
}

const Template = (firstname, lastname, email, msg, phone, poste) => {
	return(`
		<h2>Salut les acolytes!</h2>
		<p>
			Un nouveau CV est disponible pour le poste ${poste}. <br />
		</p>

		<h3>Détails:</h3>
		<p>
			<strong>Nom complet</strong>: ${firstname} ${lastname} <br />
			<strong>Courriel</strong>: ${email} <br />
			<strong>Téléphone</strong>: ${phone} <br />
			<strong>Poste</strong>: ${poste} <br />
		</p>

		<p>
			<strong>Message</strong>: <br />
			${msg}
		</p>
	`)
}