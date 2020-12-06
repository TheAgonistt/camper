<template>
	<section class="c-Form BlockColor--white">
		<div class="c-Form__container container">
			<div class="c-Form__row row">
				<div class="c-Form__contact col-12 col-MD-4">
					<div class="c-Form__contact__inner">
						<div class="c-Form__contact--address Editable">
							<address class="Editable TextColor--primary">
								1050, rue Drummond <br>
								Montréal (Québec) H3G 0B7
							</address>

							<a href="tel:4505025155" title="450 502-5155">450 502-5155</a>
						</div>
					</div>
				</div>

				<div class="c-Form__form col-12 col-MD-7">
					<div class="c-Form__form__inner">
						<div class="c-Form__form--content">
							<div class="Editable TextColor--primary">
								<p>Odio vitae sit orci feugiat. Elementum magna ut ut convallis sapien suspendisse sed pretium aliquam. Et morbi commodo vestibulum, adipiscing risus tortor ipsum est. Consectetur adipiscing habitant non sed.</p>
							</div>
						</div>

						<div class="c-Form__form--form">
							<form
								@submit.prevent="sendForm"
							>
								<div class="row">
									<div class="col-12">
										<div class="m-FormElement--bordered">
											<input v-model="name" type="text" name="firstname" placeholder="Nom et prénom" required>
										</div>
									</div>

									<div class="col-12 col-SM-6">
										<div class="m-FormElement--bordered">
											<input v-model="phone" type="tel" name="phone" placeholder="Téléphone">
										</div>
									</div>

									<div class="col-12 col-SM-6">
										<div class="m-FormElement--bordered">
											<input v-model="email" type="email" name="phone" placeholder="Courriel">
										</div>
									</div>

									<div class="col-12">
										<div class="m-FormElement--bordered">
											<input v-model="subject" type="text" name="subject" placeholder="Sujet">
										</div>
									</div>

									<div class="col-12">
										<div class="m-FormElement--bordered">
											<textarea v-model="msg" name="msg" rows="3" placeholder="Message"></textarea>
										</div>
									</div>

									<div class="col-12">
										<div class="FormElement m-FormElement_submit">
											<Button label="Envoyer" />
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

        <div class="c-Form--forest">
            <img src="~/assets/img/forest.png" alt="Forest">
        </div>
	</section>
</template>

<script>
// assets
// import Arrow from "~/assets/img/icons/arrow-long-right.svg?inline";
const axios = require('axios');

// ** Components
import Button from '~/components/shared/button.vue';

export default {
	name: 'Form',
	components: {
		Button
	},

	props: {
		images: {
			type: Object,
			default: null,
        },
        title: {
            type: String,
            default: null
        }
	},

	data() {
		return {
			name: '',
			email: '',
			msg: '',
			phone: '',
			subject: '',
			errors: [],
			success: [],
			successMessage: `Merci lol.`,
		}
	},

	methods: {
		sendForm() {
			this.errors = [];
			this.success = [];

			axios.post('/api/contact', {
				name: this.name,
				msg: this.msg,
				email: this.email,
				subject: this.subject,
				phone: this.phone,
			})

			.then(response => {
				//handle success
				console.log('SUCCESS!!');
				console.log(response);
				this.success.push(response.statusText)
			})
			.catch(error => {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log('----');
					console.log('error.response: ', error.response.data);
					console.log('error.response: ', error.response.status);
					console.log('error.response: ', error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log('----');
					console.log('error.request: ', error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('----');
					console.log('Error: ', error.message);
				}

				console.log('----');
				console.log('error.config: ', error.config);
				this.errors.push('push message: ', error.message);
			})
		},
	}
}
</script>

<style lang="scss" scoped>
.c-Form {
	padding-top: 100px;

	&__row {
		margin: 0 auto;
		max-width: 480px;
	}

	// __contact
	&__contact {
		margin-bottom: 75px;

		&--address {
			address, a {
				@include rem(14);
				line-height: 1.6;
				font-weight: variable('font-light');
				letter-spacing: 0.015em;
			}

			address {
				margin: 0 0 20px 0;
			}

			a {
				text-decoration: none;
				&:hover {
					color: variable('primary-dark')
				}
			}
		}
	}

	// __form
	&__form {
		&--content {
			margin-bottom: 50px;
			// margin-bottom: 72px;

			p {
				@include rem(16);
				line-height: 1.6;
				letter-spacing: 0.015em;
				font-weight: variable('font-light');
			}
		}

		&--form {
			.m-FormElement--bordered {
				margin-bottom: 20px;
				border-radius: 4px;
				::placeholder {
					color: rgba($primary, 0.5);
				}

				input, textarea {
					color: variable('primary');
				}

				textarea {
					display: block;
					padding: 14px 17px;
					width: 100%;
					height: 100%;
					border: none;
					-moz-appearance: none;
					appearance: none;
					outline: 0px none transparent;
				}
			}

			.m-FormElement_submit {
				text-align: right;
			}
		}
	}

    &--forest {
        // background: linear-gradient(0deg, $gray-300, $gray-300);
        background-blend-mode: lighten, multiply;
		opacity: 0.5;
		
		img {
			width: 100%;
			max-width: none;
		}
	}
	
	// MD + BEGIN
	@include mediaq('>MD') {
		padding-top: 160px;

		// __row
		&__row {
			margin: 0 auto;
			max-width: 100%;
			justify-content: space-between;
			flex-direction: row-reverse;
		}

		&__form {
			&__inner {
				max-width: 720px;
			}
		}
	}
	// MD + END
}
</style>
