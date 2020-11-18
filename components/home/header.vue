<template>
	<header class="c-SiteHeader BlockColor--primary">
		<div class="c-SiteHeader__filter"></div>
		<div
			class="c-SiteHeader__background"
			:style="`background-image: url(${this.data.fr.img})`"
		></div>
		<div class="c-SiteHeader__container container">
			<div class="c-SiteHeader__content">
				<div class="c-SiteHeader__content__text">
					<div class="Editable">
						<h1 class="TextColor--white">
							<span v-html="this.data.fr.title.first"></span>
							<span v-html="this.data.fr.title.second"></span>
						</h1>
					</div>
				</div>

				<div class="c-SiteHeader__content__action">
					<button
						@click="smoothScroll(anchor_id)"
						type="button"
					>
						<Arrow />
					</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
// assets
import Arrow from "~/assets/img/icons/arrow-long-right.svg?inline";

export default {
	name: 'Header',
	components: {
		Arrow
	},

	data() {
		return {
			// title: Object,
			anchor_id: 'a-propos',
		}
	},

	props: {
		data: Object
	},

	methods: {
		smoothScroll(id) {
			const element = document.querySelector(`#${id}`)

			if (element)
				element.scrollIntoView({behavior: 'smooth', block: 'start'});
		}
	}
}
</script>

<style lang="scss" scoped>
	.c-SiteHeader {
		position: relative;
		display: flex;
		align-items: flex-end;
		min-height: 680px;
		transition: all $ease-in .45s;

		&__filter {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(180deg, rgba(7, 43, 49, 0.48) 0%, rgba(7, 43, 49, 0) 100%), linear-gradient(180deg, rgba(7, 43, 49, 0.64) 0%, rgba(7, 43, 49, 0) 59.26%), radial-gradient(41.28% 41.28% at 50% 25.9%, rgba(7, 43, 49, 0) 0%, rgba(7, 43, 49, 0) 52.6%, rgba(7, 43, 49, 0.4) 100%);
			background-blend-mode: normal, multiply, multiply, normal;
			z-index: 105;
		}

		&__background {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-size: cover!important;
			background-position: center center!important;
			z-index: 100;
		}


		&__content {
			position: relative;
			display: flex;
			flex-direction: column;
			padding: 0 0 20px 0;
			z-index: 110;

			
			&__text {
				margin: 0 0 18px 0;

				h1 {
					display: flex;
					flex-direction: column;
					align-items: center;
					font-weight: $fw-light;

					span {
						@include rem(60);
						text-transform: uppercase;
					}
				}
			}

			&__action {
				display: flex;
				justify-content: center;

				button {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 80px;
					height: 80px;
					background: transparent;
					border: 1px solid variable('secondary');
					border-radius: 50%;
					overflow: hidden;
					transform: rotate(90deg);
					transition: all $ease-in .45s;
				}
			}
		}

		// SM + BEGIN
		@include mediaq('>SM') {
			&__content {
				padding: 0 0 50px 0;

				&__text {
					h1 {
						span {
							@include rem(80);
						}
					}
				}

				&__action {
					button {
						width: 110px;
						height: 110px;
					}
				}
			}
		}
		// SM + END

		// MD + BEGIN
		@include mediaq('>MD') {
			position: relative;
			min-height: 780px;

			&__content {
				position: relative;
				flex-direction: row;
				justify-content: center;
				padding: 0 0 80px 0;

				&__text {
					width: 100%;
					margin: 0;
					max-width: calc(100% - 360px);

					h1 {
						span {
							@include rem(100);
							&:first-child {
								margin-right: auto;
							}
							&:last-child {
								margin-left: auto;
							}
						}
					}
				}

				&__action {
					position: absolute;
					top: 0;
					right: 0;

					button {
						width: 130px;
						height: 130px;
					}
				}
			}
		}
		// MD + END

		// LG + BEGIN
		@include mediaq('>LG') {
			min-height: 900px;

			&__content {
				padding: 0 0 155px 0;

				&__text {
					max-width: calc(100% - 440px);

					h1 {
						span {
							@include rem(120);
						}
					}
				}

				&__action {
					button {
						width: 160px;
						height: 160px;
					}
				}
			}
		}
		// LG + END
	}
</style>
