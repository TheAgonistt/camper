<template>
	<a v-if="external"
		class="Btn"
		:href="link"
		:class="[
			cssClass,
			{
				'is-compactMobile': compactMobile,
				'js-dynamic-text': dynamicTextColor
			}
		]"
		target="external ? '_blank' : ''"
	>
		<div>
			{{ label }}
			<Arrow />
		</div>
	</a>

	<nuxt-link v-else
		class="Btn"
		:to="link"
		:class="[
			cssClass
		]"
		:target="external ? '_blank' : ''"
	>
		<div>
			{{ label }}
			<Arrow />
		</div>
	</nuxt-link>
</template>

<style lang="scss" scoped>
.Btn {
	display: inline-block;
	vertical-align: middle;
	padding: 11px 24px;
	background: variable('primary');
	border: 1px solid variable('primary');
	@include rem(14);
	letter-spacing: 0.015em;
	font-weight: variable('font-semi-bold');
	color: variable('white');
	border-radius: 4px;
	text-decoration: none;
	transition: all $ease-in .45s;
	&:empty {
		padding: 0;
		height: 2.5rem;
		width: 2.5rem;
	}

	div {
		display: flex;
		align-items: center;

		svg {
			margin: 0 0 0 15px;
			transform: translate3d(0, 1px, 0);
			transition: all $ease-in .45s;
		}
	}

	// hover
	&:hover, &:active, &:focus {
		background: variable('primary-light');
		border: 1px solid variable('primary-light');
		color: variable('white');	

		svg {
			margin: 0 0 0 20px;
		}
	}

	&--secondary {
		border: 1px solid variable('secondary');
		background: variable('secondary');

		div {
			color: var(--primary);
		}

		svg {
			path {
				fill: var(--primary);
			}
		}

		// hover
		&:hover, &:active, &:focus {
			background: variable('secondary-light');
			border: 1px solid variable('secondary-light');
			color: variable('white');	
		}
	}

	// Spacing if more than one child in same line
	// All siblings following the first one will be spaced accordingly
	// Note : must be placed in a direct parent to work (div, p, span, whatever)
	&:first-child ~ & { 
		margin-left: 0.8em;
	}
}
</style>

<script>
// assets
import Arrow from "~/assets/img/icons/arrow-long-right.svg?inline";

export default {
  name: "Link",
  components: {
	  Arrow,
  },
  props: {
    cssClass: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    external: Boolean
  }
}
</script>
