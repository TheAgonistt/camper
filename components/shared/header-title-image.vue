<template>
	<div class="c-HeaderTitleImage BlockColor--primary">
        <div class="c-HeaderTitleImage--filter"></div>
        <picture>
            <source :srcset="this.images.mobile" media="(max-width: 479px)">
            <source :srcset="this.images.desktop" media="(min-width: 480px)">
            <img :src="this.images.desktop" alt="">
        </picture>

        <div class="c-HeaderTitleImage--title">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="Editable">
                            <h1 class="TextColor--secondary">{{this.title}}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
// assets
// import Arrow from "~/assets/img/icons/arrow-long-right.svg?inline";

// ** Components
// import Breadcrumb from '~/components/shared/breadcrumb.vue';

export default {
	name: 'HeaderTitleImage',
	components: {
		// Breadcrumb
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
		return {}
	},

	methods: {
	}
}
</script>

<style lang="scss" scoped>
	.c-HeaderTitleImage {
        position: relative;
        
        &--filter {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba($primary, 0.8) 0%, rgba($primary, 0) 100%), linear-gradient(0deg, rgba($primary, 0.5), rgba($primary, 0.5));
            background-blend-mode: normal, normal, soft-light, normal;
        }

        img {
            display: block;
            margin: 0 auto;
            object-fit: cover;
            object-position: center center;
            width: 100%;
            max-width: none;
            height: 400px;
        }

        &--title {
            position: absolute;
            left: 0;
            right: 0;
            // bottom: 172px;
            bottom: 60px;

            .Editable {
                h1 {
                    // @include rem(64);
                    @include rem(40);
                    line-height: 1.3;
                    font-weight: variable('font-normal');
                    letter-spacing: -0.01em;
                }
            }
        }

        // SM + BEGIN
        @include mediaq('>SM') {
            img {
                height: 500px;
            }

            &--title {
                bottom: 110px;

                .Editable {
                    h1 {
                        @include rem(50);
                    }
                }
            }
        }
        // SM + END

        // MD + BEGIN
        @include mediaq('>MD') {
            img {
                height: 720px;
            }

            &--title {
                bottom: 172px;

                .Editable {
                    h1 {
                        @include rem(64);
                    }
                }
            }
        }
        // MD + END
	}
</style>
