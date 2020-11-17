<template>
	<button
        class="m-Burger"
        :class="navState ? 'is-open' : ''"
        @click="triggerBurger"
    >
        <div class="m-Burger__lines">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>
</template>

<script>

export default {
    name: 'Hamburger',
    props: {
        navState: Boolean
    },

    methods: {
        triggerBurger: function() {
            this.$store.commit('hamburger/toggle')
        }
    }
}
</script>

<style lang="scss">
	.m-Burger {
		position: relative;
		padding: 0;
		width: 100%;
		height: 100%;
		border: none;
		outline: none!important;
		background: var(--primary);
		transition: all $ease-in .45s;

		&__lines {
			position: absolute;
			top: 50%;
			left: 50%;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			width: 20px;
			height: 13px;
			// background: var(--gray-400);
			transform: translate3d(-50%, -50%, 0);

			span {
				display: block;
				width: 100%;
				height: 1px;
				background: var(--secondary);
				&:first-child, &:last-child {
					transition: all $ease-in .45s .15s;
				}
				&:first-child {
					margin-left: auto;
				}

				&:nth-child(2) {
					position: relative;
					transform: rotate(0);
					transition: all $ease-in .45s;
					&:before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: var(--secondary);
						transform: rotate(0);
						transition: all $ease-in .45s;
					}
				}
			}
		}

		&.is-open {
			background: var(--secondary);
		}

		&.is-open & {
			&__lines {
				span {
					background: var(--primary);

					&:first-child, &:last-child {
						width: 0;
					}

					&:nth-child(2) {
						transform: rotate(-45deg);
						transition: all $ease-in .45s .15s;
						&:before {
							background: var(--primary);
							transform: rotate(90deg);
							transition: all $ease-in .45s .15s;
						}
					}
				}
			}
		}
	}
</style>
