<template>
	<section class="c-About BlockColor--primary" id="a-propos">
        <div class="c-About__container container">
            <div class="c-About__row row">
                <div class="c-About__image col-12 col-MD-6">
                    <div class="c-About__image__inner">
                        <div class="c-About__image__wrapper">
                            <picture>
                                <source :srcset="this.data.about.img" media="(max-width: 479px)">
                                <source :srcset="this.data.about.img" media="(min-width: 480px) and (max-width: 767px)">
                                <source :srcset="this.data.about.img" media="(min-width: 768px)">
                                <img :src="this.data.about.img">
                            </picture>
                        </div>
                    </div>
                </div>

                <div class="c-About__content col-12 col-MD-6">
                    <div class="c-About__content__inner">
                        <div class="c-About__content--text">
                            <div class="Editable">
                                <span v-if="this.data.about.uptitle" v-html="this.data.about.uptitle" class="-uptitle TextColor--secondary"></span>
                                <h2 v-if="this.data.about.title" v-html="this.data.about.title" class="-title TextColor--white"></h2>
                                <p v-if="this.data.about.text" v-html="this.data.about.text" class="-text TextColor--gray-300"></p>
                            </div>
                        </div>

                        <div class="c-About__content--button">
                            <nuxt-link :to="this.data.about.link.to" class="c-Nav__logo__link flex align-center TextColor--white">
                                <span v-html="this.data.about.link.label" class="TextColor--primary"></span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</section>
</template>

<script>
// components
import Link from '~/components/shared/link.vue';

export default {
	name: 'About',
	components: {
		Link
    },
    
    data: function() {
		return {
			content: {
                uptitle: 'À propos',
                title: 'nav&nbsp;camper offre un service clé en main de personnalisation de campeur ',
                text: 'Que ce soit un Ford Transit, un Mercedez Sprinter ou encore un Ram Promaster, l’équipe de Nav vous accompagne dans l’élaboration et la conception d’un espace à votre image.',
                button_label: 'Découvrez nos services',
                button_url: '/services',
            },
            image: {
                mobile: 'https://source.unsplash.com/random/480x615?camper',
                tablet: 'https://source.unsplash.com/random/480x615?camper',
            }
		}
    },
    
    props: {
		data: Object
	},
}
</script>

<style lang="scss">
	.c-About {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            background: variable('primary');
            mix-blend-mode: screen;
        }

        &__image {
            &__inner {
                margin-left: calc(var(--grid-gutter-width) * -1);
                margin-right: calc(var(--grid-gutter-width) * -1);
            }

            &__wrapper {
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        &__content {
            &__inner {
                margin: 0 auto;
                padding: 40px 0;
                max-width: 480px;
            }

            &--text {
                padding: 0 0 18px 0;

                .Editable {
                    text-align: center;

                    .-uptitle {
                        display: block;
                        margin: 0 0 12px 0;
                        @include rem(16);
                        line-height: 1.6;
                        text-transform: uppercase;
                    }

                    .-title {
                        margin: 0 0 16px 0;
                        @include rem(28);
                        line-height: 1.2;
                        text-transform: uppercase;
                    }
                }
            }

            &--button {
                display: flex;
                justify-content: flex-end;

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    background: variable('secondary');

                    span {
                        @include rem(12);
                        line-height: 1.3;
                        font-weight: variable('font-semi-bold');
                        letter-spacing: 0.02em;
                        text-align: center;
                        text-transform: uppercase;
                    }
                }
            }
        }

        // MD + BEGIN
        @include mediaq('>MD') {
            &__content {
                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    width: 1px;
                    background: variable('primary');
                    mix-blend-mode: screen;
                }

                &__inner {
                    padding: 80px 0 40px 25px;
                }

                &--text {
                    padding: 0 0 67px 0;
                    
                    .Editable {
                        text-align: left;

                        .-uptitle {
                            margin: 0 0 22px 0;
                            @include rem(20);
                            line-height: 1.6;
                        }

                        .-title {
                            margin: 0 0 18px 0;
                            @include rem(34);
                            line-height: 1.28;
                        }
                    }
                }

                &--button {
                    a {
                        width: 160px;
                        height: 160px;

                        span {
                            @include rem(14);
                            letter-spacing: 2%;
                        }

                        &:hover {
                            background: variable('secondary-light')
                        }
                    }
                }
            }

            &__image {
                position: static;

                &__wrapper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 50%;
                    bottom: 0;
                    z-index: 110;

                    img {
                        transform: translate3d(0, -45px, 0);
                        // transform: translate3d(0, -75px, 0);
                    }
                }
            }
        }
        // MD + END

        // LG + BEGIN
        @include mediaq('>LG') {
            &__content {
                &__inner {
                    padding: 245px 0 80px 42px;
                    max-width: 520px;
                }

                &--text {
                    .Editable {
                        .-uptitle {
                            margin: 0 0 18px 0;
                        }

                        .-title {
                            @include rem(44);
                            line-height: 56.32px;
                        }

                        .-text {
                            @include rem(14);
                        }
                    }
                }

                &--button {
                    a {
                        transform: translate3d(56px, 0, 0);
                    }
                }
            }

            &__image {
                img {
                    transform: translate3d(0, -82px, 0);
                }
            }
        }
        // LG + END
	}
</style>
