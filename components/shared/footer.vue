<template>
	<footer class="c-SiteFooter BlockColor--primary">
		<div class="container">
			<div class="c-SiteFooter__row row">
				<div class="c-SiteFooter__logo col-12 col-MD-4">
					<a href="#">
						<LogoVer />
					</a>
				</div>

				<div class="c-SiteFooter__details col-12 col-MD-4">
					<address class="TextColor--white">
						1050, rue DrummondMontréal <br> (Québec)  H3G&nbsp;0B7
					</address>

					<a class="TextColor--white" href="tel:14505025155">1 450 502-5155</a>
				</div>

				<div class="c-SiteFooter__socials col-12 col-MD-4">
					<div class="c-SiteFooter__socials__inner">
						<span class="TextColor--white">Suivez-nous</span>

						<ul class="flex">
							<li>
								<a href="" target="_blank">
									<Instagram />
								</a>
							</li>

							<li>
								<a href="" target="_blank">
									<Facebook />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
// assets
import LogoVer from "~/assets/img/logo-vertical.svg?inline";
import Instagram from "~/assets/img/socials/instagram.svg?inline";
import Facebook from "~/assets/img/socials/facebook.svg?inline";

export default {
	name: 'Footer',

	components: {
		LogoVer,
		Instagram,
		Facebook
    },
}
</script>

<style lang="scss">
	.c-SiteFooter {
		position: relative;
		padding: 40px 0;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 1px;
			background: variable('primary');
			mix-blend-mode: screen;
		}

		&__logo {
			position: relative;
			margin-bottom: 35px;
			padding-bottom: 35px;

			a {
				display: block;
				margin: 0 auto;
				max-width: 180px;

				svg {
					width: 100%;
					height: 100%;
				}
			}
		}

		&__details {
			position: relative;
			margin-bottom: 35px;
			padding-bottom: 35px;
			text-align: center;

			address, a {
				@include rem(14);
				line-height: 160%;
				letter-spacing: 0.015em;
				font-weight: variable('font-light')
			}
		}

		&__socials {
			&__inner {
				display: flex;
				align-items: center;
				flex-direction: column;

				span {
					@include rem(14);
					line-height: 160%;
					font-weight: variable('font-bold');
					letter-spacing: 0.015em;
				}

				ul {
					margin: 16px 0 0 0;

					li {
						padding: 0 16px;

						a {
							display: block;
							width: 20px;

							svg {
								width: 100%;
								height: auto;
								max-height: 20px;

								path {
									fill: variable('secondary');
								}
							}
						}
					}
				}
			}
		}

		// MD + BEGIN
		@include mediaq('>MD') {
			padding: 94px 0;

			&__logo {
				margin: 0;
				padding-bottom: 0;
			}

			&__details {
				margin: 0;
				padding-bottom: 0;

				&:before, &:after {
					content: '';
					position: absolute;
					top: -30px;
					bottom: -30px;
					width: 1px;
					background: variable('primary');
					mix-blend-mode: screen;
				}

				&:before {
					left: 0;
				}

				&:after {
					right: 0;
				}
			}

			&__socials {
				margin: 0;
				padding-bottom: 0;
			}
		}
		// MD + END
	}
</style>
