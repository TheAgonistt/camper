<template>
	<section class="c-Services BlockColor--primary">
		<div class="c-Services__container container">
			<div class="c-Services__row row">
				<div class="c-Services__col col-12 col-MD-6">
					<div class="c-Services__col__media">
						<div class="c-Services__col--filter"></div>
						<div class="c-Services__col__media--img">
							<picture>
								<source :srcset="this.images1.mobile" media="(max-width: 479px)">
								<source :srcset="this.images1.desktop" media="(min-width: 480px)">
								<img :src="this.images1.desktop" alt="">
							</picture>
						</div>
					</div>

					<div class="c-Services__col__inner">
						<a class="c-Services__col--content Editable" href="#">
							<h2 class="TextColor--white">Personnalisation <br>de campeur</h2>
							<p class="TextColor--white">Odio vitae sit orci feugiat. Elementum magna ut ut convallis sapien suspendisse sed pretium aliquam. Et morbi commodo vestibulum, adipiscing risus tortor est.</p>

							<span class="c-Services__col--content--link BlockColor--secondary">
								<Arrow />
							</span>
						</a>
					</div>
				</div>

				<div class="c-Services__col col-12 col-MD-6">
					<div class="c-Services__col__media">
						<div class="c-Services__col--filter"></div>
						<div class="c-Services__col__media--img">
							<picture>
								<source :srcset="this.images1.mobile" media="(max-width: 479px)">
								<source :srcset="this.images1.desktop" media="(min-width: 480px)">
								<img :src="this.images1.desktop" alt="">
							</picture>
						</div>
					</div>

					<div class="c-Services__col__inner">
						<a class="c-Services__col--content Editable" href="#">
							<h2 class="TextColor--white">Génie <br>conseil</h2>
							<p class="TextColor--white">Elementum magna ut ut convallis sapien suspendisse sed pretium aliquam. Et morbi commodo vestibulum, adipiscing risus tortor ipsum est. Consectetur adipiscing habitant non sed.</p>

							<span class="c-Services__col--content--link BlockColor--secondary">
								<Arrow />
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
// assets
import Arrow from "~/assets/img/icons/arrow-long-right.svg?inline";

// ** Components
import Breadcrumb from '~/components/shared/breadcrumb.vue'

export default {
	name: 'ServicesList',
	components: {
		Arrow
	},

	props: {
		images1: {
			type: Object,
			default: null,
		},
		images2: {
			type: Object,
			default: null,
		},
	},

	data() {
		return {}
	},

	methods: {
	}
}
</script>

<style lang="scss" scoped>
	.c-Services {
		&__col {
			&__inner {
				position: relative;
			}

			&--filter {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: linear-gradient(180deg, rgba($primary, 0.64) 0%, rgba($primary, 0) 100%), linear-gradient(180deg, rgba($primary, 0.64) 0%, rgba($primary, 0) 100%);
				background-blend-mode: normal, multiply, normal;
				pointer-events: none;
				z-index: 1;
			}

			&__media {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				overflow: hidden;
				pointer-events: none;

				&--img {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}

			&--content {
				position: relative;
				display: block;
				max-width: $scr-sm;
				margin: 0 auto;
				padding: 50px 0 150px 0;
				z-index: 2;

				h2 {
					margin-bottom: 0.75em;
					@include rem(35.2);
					line-height: 1.28;
					text-transform: uppercase;
				}

				p {
					max-width: 280px;
					@include rem(14);
					line-height: 1.28;
					font-weight: variable('font-light');
				}

				&--link {
					position: relative;
					display: block;
					margin-top: 37px;
					width: 60px;
					height: 60px;
					border-radius: 50%;

					svg {
						position: absolute;
						top: 50%;
						left: 50%;
						width: 24px;
						transform: translate3d(-50%, -50%, 0);
						transition: all $ease-in .45s;

						path {
							fill: variable('primary');
						}
					}
				}

				&:hover & {
					&--link {
						background: variable('secondary-light');

						svg {
							transform: translate3d(-35%, -50%, 0);
						}
					}
				}
			}
		}

		// XS + BEGIN
		@include mediaq('>XS') {
			&__col {
				&--content {
					padding: 90px 0 180px 0;
				}
			}
		}
		// XS + END

		// MD + BEGIN
		@include mediaq('>MD') {
			position: relative;

			&__col {
				position: static;

				&--filter {
					width: 50vw;
					right: 0;
					left: auto;
				}

				&__media {
					width: 50vw;
					right: 0;
					left: auto;
				}

				&--content {
					padding: 86px 0 316px 0;

					h2 {
						// @include rem(44);
						@include rem(40);
					}
				}

				&:last-child & {
					&__inner {
						padding-left: 50px;
					}

					&--filter {
						right: 0;
						left: auto;
					}
					
					&__media {
						right: auto;
						left: 0;
					}
				}
			}
		}
		// MD + END

		// LG + BEGIN
		@include mediaq('>LG') {
			&__col {
				&--content {
					h2 {
						margin-bottom: 0.95em;
						@include rem(44);
					}
				}

				&:last-child & {
					&__inner {
						padding-left: 80px;
					}
				}
			}
		}
		// LG + ENd
	}
</style>
