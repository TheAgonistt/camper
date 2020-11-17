<template>
	<header class="c-ServicesHeader BlockColor--primary">
		<div class="c-ServicesHeader__container container">
			<div class="c-ServicesHeader__row">
				<div class="c-ServicesHeader__breadcrumb">
					<Breadcrumb />
				</div>

				<div class="c-ServicesHeader__title">
					<div class="Editable">
						<h1 class="TextColor--white">{{ title }}</h1>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
// assets
// import Arrow from "~/assets/img/icons/arrow-long-right.svg?inline";

// ** Components
import Breadcrumb from '~/components/shared/breadcrumb.vue'

export default {
	name: 'Header',
	components: {
		Breadcrumb
	},

	props: {
		title: {
			type: String,
			default: null
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
	.c-ServicesHeader {
		position: relative;
		margin: 238px 0 0 0;
		// padding: 90px 0 70px 0;
		padding: 60px 0 40px 0;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;;
			height: 1px;
			background: variable('primary');
			mix-blend-mode: screen;
		}

		&__breadcrumb {
			text-align: center;
		}

		&__title {
			padding: 50px 0 0 0;

			.Editable {
				text-align: center;

				h1 {
					@include rem(40);
					line-height: 1;
					font-weight: variable('font-light');
					letter-spacing: 0.02em;
					text-transform: uppercase;
				}
			}
		}

		// SM + BEGIN
		@include mediaq('>SM') {
			&__title {
				.Editable {
					h1 {
						@include rem(60);
					}
				}
			}
		}
		// SM + END

		// MD + BEGIN
		@include mediaq('>MD') {
			margin: 200px 0 0 0;
			padding: 80px 0 60px 0;

			// __row
			&__row {
				display: flex;
				align-items: flex-end;
			}

			// __title
			&__title {
				margin-left: auto;
				padding: 0;
			}
		}
		// MD + END
	}
</style>
