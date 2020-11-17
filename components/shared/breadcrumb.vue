<template>
    <div>
	<nuxt-link :to="this.page.url" class="c-Breadcrumb">
        <div class="c-Breadcrumb__inner">
            <div class="c-Breadcrumb--icon">
                <Arrow />
            </div>

            <div class="c-Breadcrumb--label">
                <span class="TextColor--white">{{ this.page.title }}</span>
            </div>
        </div>
    </nuxt-link>

    </div>
</template>

<script>
// assets
import Arrow from "~/assets/img/icons/chevron-left.svg?inline";


export default {
	name: 'Breadcrumb',
	components: {
		Arrow
    },
    
    props: {
		page: {
			type: Object,
			default: function () {
                return {
                    title: 'Accueil',
                    url: '/',
                }
            }
		},
	},
}
</script>

<style lang="scss" scoped>
	.c-Breadcrumb {
        display: inline-block;

        &__inner {
            display: flex;
            align-items: center;
        }

        &--label {
            padding: 0 0 0 12px;

            span {
                @include rem(12);
                line-height: 1.6;
                font-weight: variable('font-medium');
                text-transform: uppercase;
                letter-spacing: 0.04em;
            }
        }
	}
</style>
