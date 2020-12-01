<template>
	<section class="m-Gallery BlockColor--primary" id="gallery">
        <div class="m-Gallery__container container-left-MD">
            <client-only
                placeholder="Loading..."
            >
                <agile
                    :dots="false"
                >
                    <div
                        v-for="(item, index) in  this.data.gallery"
                        v-bind:key="index"
                        class="m-Gallery__slide slide"
                    >
                        <div class="m-Gallery__row">
                            <div class="m-Gallery__media">
                                <div class="m-Gallery__media--image">
                                    <picture>
                                        <!-- <source :srcset="image_mobile" media="(max-width: 479px)">
                                        <source :srcset="image_tablet" media="(max-width: 720px)">
                                        <source :srcset="image_phablet" media="(max-width: 991px)"> -->
                                        <img :src="item.image">
                                    </picture>
                                </div>
                            </div>

                            <div class="m-Gallery__content">
                                <div class="m-Gallery__content__inner">
                                    <div class="Editable">
                                        <h5 
                                            class="TextColor--secondary -uptitle"
                                            v-if="item.content.uptitle"
                                            v-html="item.content.uptitle"
                                        ></h5>
                                        <h3
                                            class="TextColor--white -title"
                                            v-if="item.content.title"
                                            v-html="item.content.title"
                                        ></h3>

                                        <p
                                            class="TextColor--gray-300"
                                            v-if="item.content.text"
                                            v-html="item.content.text"
                                        ></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <template slot="prevButton">
                        <div class="m-Gallery--button -left BlockColor--secondary">
                            <Arrow />
                        </div>
                    </template>

                    <template slot="nextButton">
                        <div class="m-Gallery--button -right BlockColor--secondary">
                            <Arrow />
                        </div>
                    </template>
                </agile>
            </client-only>
        </div>
	</section>
</template>

<script>
// assets
import Arrow from "~/assets/img/icons/arrow-long-right.svg?inline";

// components
import Link from '~/components/shared/link.vue';

export default {
	name: 'Gallery',
	components: {
        Arrow,
    },
    
    data: function() {
		return {
            image_mobile: 'https://source.unsplash.com/random/480x480?camper',
            image_tablet: 'https://source.unsplash.com/random/720x480?water',
            image_phablet: 'https://source.unsplash.com/random/991x480?city',
            image_desktop: 'https://source.unsplash.com/random/1200x900?drone',
        }
    },

    props: {
		data: Object
	},

    created() {
        console.log('gallery: ', this.data.gallery);
    },
    
    methods: {
    },
}
</script>

<style lang="scss">
    .m-Gallery {
        &__media {
            height: 480px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center center;
            }
        }
        
        &__content {
            padding-left: variable('grid-gutter-width');
            padding-right: variable('grid-gutter-width');
            
            &__inner {
                margin: 0 auto;
                padding-top: 42px;
                padding-bottom: 122px;
                max-width: 80%;
            }

            .Editable {
                text-align: center;

                .-uptitle {
                    margin: 0 0 17px 0;
                    @include rem(16);
                    line-height: 1.6;
                    letter-spacing: 1.05px;
                    text-transform: uppercase;
                    font-weight: variable('font-medium');
                }

                .-title {
                    margin: 0 0 20px 0;
                    @include rem(28);
                    line-height: 1.28;
                    text-transform: uppercase;
                    font-weight: variable('font-light');
                }

                p {
                    margin: 0;
                    @include rem(14);
                    line-height: 1.28;
                    letter-spacing: 0.4px;
                    font-weight: variable('font-light');
                }
            }
        }

        .agile__actions {
            position: absolute;
            top: 480px;
            left: 20px;
            right: 20px;
            transform: translate3d(0, -50%, 0);
            pointer-events: none;
        }

        &--button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            pointer-events: all;

            svg {
                path {
                    fill: variable('primary');
                }
            }

            &.-left {
                svg {
                    transform: rotate(-180deg);
                }
            }
        }

        // SM + BEGIN
        @include mediaq('>SM') {
        }
        // SM + END

        // MD + BEGIN
        @include mediaq('>MD') {
            position: relative;
            overflow: visible;
            &:before {
                content: '';
                position: absolute;
                top: 45px;
                left: 0;
                right: 0;;
                height: 1px;
                background: variable('primary');
                mix-blend-mode: screen;
            }

            &__container {
                position: relative;
            }

            &__row {
                display: flex;
                // align-items: flex-end;
                flex-direction: row-reverse;
            }

            &__media {
                position: relative;
                @include make-col(1, 2);
                height: 650px;
                overflow: visible;
                // width: 50vw;
                // max-width: 50vw;

                &--image {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 50vw;
                    max-width: 50vw;
                    overflow: hidden;

                    img {
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        object-fit: cover;
                    }
                }
            }

            &__content {
                position: relative;
                align-self: flex-end;
                @include make-col(1, 2);
                // &:before {
                //     content: '';
                //     position: absolute;
                //     top: 0;
                //     right: 0;
                //     bottom: 0;
                //     width: 1px;
                //     background: variable('primary');
                //     mix-blend-mode: screen;
                // }

                .Editable {
                    text-align: left;
                }

                &__inner {
                    padding-top: 100px;
                    padding-bottom: 80px;
                    padding-right: 100px;
                    // margin-right: auto!important;
                    margin: 0!important;
                    // padding-top: 160px;
                    max-width: 620px;
                }
            }

            .agile__actions {
                top: 50%;
            }
        }
        // MD + END

        // LG + BEGIN
        @include mediaq('>LG') {
            &__media {
                height: 899px;
            }

            &__content {
                .Editable {
                    .-uptitle {
                        @include rem(20);
                    }

                    .-title {
                        @include rem(44);
                    }
                }
            }
        }
        // LG + END
    }

    .agile--ssr .agile__slides > * {
        overflow: hidden;
        width: 0
    }

    .agile--ssr .agile__slides > *:first-child {
        width: 100%
    }

    .agile__nav-button {
        padding: 0;
        background: transparent;
        border: none;
    }
</style>
