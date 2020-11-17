<template>
	<nav
		class="c-Nav"
		:class="{
			'is-open': data.navState,
			'is-compact': data.scroll.y > 100,
			'show-nav': data.scroll.direction == 0,
		}"
	>
		<div class="c-Nav__outter">
			<div class="c-Nav__container container-right-MD container-right-LG">
				<div class="c-Nav__row flex">
					<div class="c-Nav__logo">
						<nuxt-link to="/" class="c-Nav__logo__link flex align-center">
							<div class="c-Nav__logo__link--icon">
								<LogoIcon />
							</div>

							<div class="c-Nav__logo__link--vertical">
								<LogoVer />
							</div>

							<div class="c-Nav__logo__link--horizontal">
								<LogoHor />
							</div>
						</nuxt-link>
					</div>

					<div class="c-Nav__navigation">
						<div class="c-Nav__navigation__scroll">
							<div class="c-Nav__navigation__inner">
								<ul class="noop">
									<FirstLevel
										v-for="i in data.nav"
										:key="i.id"
										:item="i"
									/>
								</ul>

								<div class="c-Nav__language">
									<div class="c-Nav__language__inner">
										<a class="TextColor--secondary" href="">EN</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="c-Nav__hamburger BlockColor--primary">
						<Hamburger :nav-state="data.navState" />
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<style lang="scss">
	.c-Nav {
		$c: &;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 80px;
		transition: all $ease-in .45s;
		transform: translate3d(0, -100%, 0);
		z-index: 500;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 160px;
			background: linear-gradient(to bottom, rgba($primary, 1) 0%,rgba($primary,0) 75%);
			opacity: 0;
			pointer-events: none;
			transition: all $ease-in .45s;
		}

		&__logo {
			&__link {
				&--icon {
					position: absolute;
					width: 60px;
					opacity: 0;
					pointer-events: none;
					transform: translate3d(20px, 50px, 0);
					transition: all $ease-in .45s;
					z-index: 1;

					svg {
						width: 100%;
						max-width: 100%;
						height: auto;

						path {
							fill: variable('secondary');

							&:last-child {
								display: none;
							}
						}
					}
				}

				&--vertical {
					position: absolute;
					top: 0;
					left: 50%;
					transform: translate3d(-50%, 78px, 0);
					height: 100%;
					width: 197px;
					opacity: 1;
					transition: all $ease-in .30s;
				}

				&--horizontal {
					display: none;
				}

				svg {
					width: 100%;
					max-width: 100%;
					height: auto;
				}
			}
		}

		&__language {
			padding: 0 0 40px 0;

			a {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				border: 1px solid var(--secondary);
				@include rem(12);
			}
		}

		&__hamburger {
			position: absolute;
			top: 20px;
			right: 20px;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			overflow: hidden;
		}

		&.is-open {
			height: 100vh;
			background: variable('primary');
		}

		&.is-open & {
			&__logo {
				&__link {
					&--icon {
						opacity: 0!important;
					}

					&--vertical {
						opacity: 0;
					}
				}
			}

			&__navigation {
				opacity: 1;
				pointer-events: all;
			}
		}

		&.is-compact {
			&:before {
				opacity: 1;
			}
		}

		&.is-compact & {
			&__logo {
				&__link {
					&--icon {
						opacity: 1;
						pointer-events: none;
					}
	
					&--vertical  {
						left: 0;
						transform: translate3d(0, 0, 0);
						opacity: 0;
						pointer-events: none;
					}
				}
			}
		}

		&.show-nav {
			transform: translate3d(0, 0, 0);
		}

		// MD - BEGIN
		@include mediaq('<MD') {
			&__navigation {
				position: absolute;
				top: 80px;
				left: 0;
				right: 0;
				height: calc(100vh - 80px);
				opacity: 0;
				pointer-events: none;
				transition: opacity $ease-in .45s;

				&__scroll {
					position: relative;
					height: 100%;
					overflow: hidden;
					overflow-y: scroll;
				}

				&__inner {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 40px;
					display: flex;
					flex-direction: column;
					// justify-content: center;
					padding: 0 40px;

					> ul {
						margin: 0;
						padding: 65px 0 40px 0;

						> li {
							position: relative;
							margin: 0;
							padding: 0;
							&:before {
								content: '';
								position: absolute;
								left: 0;
								right: 0;
								bottom: 0;
								height: 1px;
								background: var(--primary);
								mix-blend-mode: screen;
							}

							#{$c}__first-level {
								position: relative;

								a {
									position: relative;
									display: block;
									padding: 23px 55px 23px 0;
									@include rem(24);
									line-height: 120%;
									text-transform: uppercase;
									transition: all $ease-in .45s;

									&.nuxt-link-active {
										color: variable('secondary');
									}
								}

								button {
									position: absolute;
									top: 0;
									right: 0;
									bottom: 0;
									width: 40px;
									padding: 0;
									background: transparent;
									border: none;
									outline: none;

									span {
										position: absolute;
										top: 50%;
										left: 50%;
										width: 20px;
										height: 2px;
										background: var(--secondary);
										transform: translate3d(-50%, -50%, -0);
										&:before {
											content: '';
											position: absolute;
											top: 0;
											left: 0;
											right: 0;
											bottom: 0;
											background: var(--secondary);
											transform: rotate(-90deg);
											transition: all $ease-in .45s;
										}
									}

									&.is-open {
										span {
											&:before {
												left: 50%;
												right: 50%;
											}
										}
									}
								}
							}

							#{$c}__second-level {
								overflow: hidden;
								transition: all $ease-in .45s;
			
								ul {
									margin: 0;
									padding: 0 0 40px 0;
		
									li {
										display: flex;
										align-items: center;
										margin: 0;
										padding: 0;
										overflow: hidden;
		
										a {
											display: block;
											@include rem(18);
										}

										svg {
											width: 34px;
											margin-left: -34px;
											padding-right: 10px;
											transition: all $ease-in .45s;
										}

										&:hover, &:active {
											svg {
												margin-left: 0;
											}
										}
									}
								}
							}

							&.is-open {
								#{$c}__first-level {
									a {
										color: var(--secondary);
									}
								}
							}
						}
					}
				}
			}
		}
		// MD - END

		// SM + BEGIN
		@include mediaq('>SM') {
			// __navigation
			&__navigation {
				&__inner {
					max-width: $scr-sm;
					margin: 0 auto;
				}
			}
		}
		// SM + END

		// MD + BEGIN
		@include mediaq('>MD') {
			$c: &;
			top: 40px;
			background: transparent;
			&:before {
				top: -40px;
			}

			&__container {
				position: relative;;
				padding-left: 82px;
			}

			&__logo {
				width: 340px;

				&__link {
					&--icon, &--vertical {
						display: none;
					}

					&--horizontal {
						display: block;
					}
				}
			}

			&__language {
				padding: 0;

				a {
					padding: 0 15px;
					border: none;
					@include rem(12);
					font-weight: var(--font-bold);
					letter-spacing: 0.12em;
					text-transform: uppercase;
				}
			}

			&__row {
				align-items: center;
			}

			&__navigation {
				margin-left: auto;

				&__inner {
					display: flex;
					align-items: center;

					> ul {
						display: flex;
						align-items: center;
						margin: 0;
						padding: 0;

						> li {
							margin: 0;
							padding: 0;

							#{$c}__first-level {
								a {
									display: block;
									padding: 0 15px;

									span {
										@include rem(12);
										font-weight: var(--font-bold);
										letter-spacing: 0.12em;
										text-transform: uppercase;
									}

									&.nuxt-link-active {
										span {
											position: relative;
											&:before {
												content: '';
												position: absolute;
												top: 100%;
												left: 0;
												right: 0;
												height: 4px;
												background: variable('secondary');
											}
										}
									}
								}

								button {
									display: none;
								}
							}

							ul {
								display: none;
							}
						}
					}
				}
			}

			&__hamburger {
				display: none;
			}

			&.is-compact {
				transform: translate3d(0, -125%, 0);
			}

			&.show-nav {
				transform: translate3d(0, 0, 0)!important;
			}
		}
		// MD + END

		// LG + BEGIN
		@include mediaq('>LG') {
			$c: &;

			&__navigation {
				&__inner {
					> ul {
						> li {
							#{$c}__first-level {
								a {
									padding: 0 30px;
								}
							}
						}
					}
				}
			}

			&__language {
				a {
					padding: 0 0 0 30px;
				}
			}
		}
		// LG + END
	}
</style>

<script>
// assets
import LogoHor from "~/assets/img/logo-horizontal.svg?inline";
import LogoVer from "~/assets/img/logo-vertical.svg?inline";
import LogoIcon from "~/assets/img/logo-icon.svg?inline";

// components
import Hamburger from '~/components/shared/hamburger.vue';
import FirstLevel from '~/components/navigation/first-level.vue';

let subLevelOpen = false;

export default {
	name: 'navigation',
	components: {
		LogoHor,
		LogoVer,
		LogoIcon,
		Hamburger,
		FirstLevel
	},

	data: function() {
		return {
			data: {
				nav: [
					{
						id: 1,
						label: 'Services',
						url: '/services',
					},
					{
						id: 2,
						label: 'Boutique',
						url: 'https://www.amazon.ca',
						external: true,
					},
					{
						id: 3,
						label: 'À propos',
						url: '/a-propos',
					},
					{
						id: 4,
						label: 'Contact',
						url: '/contact',
					},
				],
				navState: Boolean,
				scroll: {
					prev_y: 0,
					y: 0,
					direction: 0,
				}
			}
		}
	},

	created() {
		// watch hamburger state
		this.data.navState = this.$store.getters['hamburger/get']
		this.$store.subscribe((mutation, state) => {
			this.data.navState = this.$store.getters['hamburger/get']
		})
	},

	mounted() {
		window.addEventListener('scroll', this.onScroll);
	},

	methods: {
		updateScrollDirection() {
			const d = this.data.scroll.direction;
			const y = this.data.scroll.y;
			const p = this.data.scroll.prev_y;

			if (y > p) {
				this.data.scroll.direction = 1;
			} else {
				this.data.scroll.direction = 0;
			}
		},

		onScroll: function(e) {
			this.data.scroll.prev_y = this.data.scroll.y;
			this.data.scroll.y = window.scrollY;

			this.updateScrollDirection();
		}
	}
}
</script>
