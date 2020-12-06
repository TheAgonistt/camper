const express = require('express')
const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')

const app = express()
const attributes = ['name', 'email', 'msg', 'subject', 'phone']

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
		name: v => v.length < 1,
		email: v => !validator.isEmail(v) && v.length < 5,
		msg: v => v.length < 1,
		subject: v => v.length < 1,
		phone: v => v.length < 1,
	}

	// if object has key and function returns false, return sanitized input. Else, return false
	return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}


const sendMail = (name, email, msd, subject, phone) => {
	let transporter = nodemailer.createTransport({
		host: 'smtp.sendgrid.net',
		port: 465,
		secure: false,
		auth: {
			user: 'apikey',
			pass: process.env.SENDGRID
		},
	})

	let mailOptions = {
		from: 'the3agonist@gmail.com',
		to: 'the3agonist@gmail.com',
		subject: `Test email (${subject})`,
		html: Template(name, email, msd, subject, phone),
		// attachments: [
		// 	{
		// 		filename: `${poste}-${firstname}-${lastname}-${Date.now()}.${fileType}`,
		// 		content: fs.createReadStream(file),
		// 	}
		// ]
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

const Template = (name, email, msd, subject, phone) => {
	return(`
		<h1>Text EMAIL !!</h1>
		<h2>${name}</h2>
	`)
}