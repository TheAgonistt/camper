<template>
	<section class="c-Newsletter BlockColor--primary" id="newsletter">
        <div class="container">
            <div class="c-Newsletter__row row">
                <div class="c-Newsletter__start col-12 col-MD-6">
                    <div class="c-Newsletter__start__inner">
                        <a href="#" class="c-Newsletter__start--button">
                            <div class="c-Newsletter__start--button__inner">
                                <div class="Editable">
                                    <span class="TextColor--white">Démarrez <br> votre projet</span>
                                </div>

                                <div class="c-Newsletter__start--button--icon">
                                    <Arrow />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="c-Newsletter__form col-12 col-MD-6">
                    <div class="c-Newsletter__form__inner">
                        <div class="c-Newsletter__form__content">
                            <div class="Editable">
                                <h4 class="-uptitle TextColor--secondary">Infolettre</h4>
                                <h3 class="-title TextColor--white">Restez informez</h3>
                                <p class="TextColor--gray-300">Urna dictum amet, commodo feugiat hendrerit interdum non viverra. Enim in in felis blandit. At consectetur pretium cursus ut fames lacus, lectus tincidunt.</p>
                            </div>
                        </div>

                        <div class="c-Newsletter__form__field">
                            <form action="">
                                <div class="c-Newsletter__form--group">
                                    <div class="m-FormElement--bordered">
                                        <input type="text" placeholder="Courriel">
                                    </div>

                                    <div class="m-FormElement__submit">
                                        <button class="TextColor--secondary" type="submit">Je m'inscris</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</section>
</template>

<script>
// assets
import Arrow from "~/assets/img/icons/arrow-long-right.svg?inline";

// components
import Link from '~/components/shared/link.vue';

export default {
	name: 'Newsletter',
	components: {
        Arrow,
    },
    
    data: function() {
		return {
        }
    },

    created() {
    },
    
    methods: {
    },
}
</script>

<style lang="scss">
    .c-Newsletter {
        padding: variable('spacing-normal') 0;
    
        // __start
        &__start {
            &__inner {
                display: flex;
                justify-content: center;
            }

            &--button {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 200px;
                height: 200px;
                border-radius: 50%;
                overflow: hidden;
                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: variable('primary');
                    mix-blend-mode: screen;
                    pointer-events: none;
                    transition: all $ease-in .45s;
                }

                &__inner {
                    text-align: center;

                    .Editable {
                        span {
                            @include rem(16);
                            line-height: 1.6;
                            letter-spacing: 4%;
                            text-transform: uppercase;
                        }
                    }
                }

                &--icon {
                    margin-top: 10px;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 24px;
                }
            }
        }

        // __form
        &__form {
            padding-top: 80px;

            &__inner {
                margin: 0 auto;
                max-width: $scr-xs;
                text-align: center;
            }

            &__content {
                margin-bottom: 40px;

                .Editable {
                    .-uptitle {
                        margin: 0 0 23px 0;
                        // @include rem(20);
                        @include rem(20);
                        line-height: 24px;
                        letter-spacing: 4%;
                        font-weight: variable('font-medium');
                        text-transform: uppercase;
                    }

                    .-title {
                        margin: 0 0 22px 0;
                        @include rem(44);
                        line-height: 1.28;
                        text-transform: uppercase;
                    }

                    p {
                        @include rem(14);
                        line-height: 1.28;
                    }
                }
            }

            &__field {
            }

            &--group {
                display: flex;
                margin: 0 auto;
                max-width: 396px;
                // margin: 0;

                .m-FormElement--bordered {
                    border-bottom-left-radius: 6px;
                    border-top-left-radius: 6px;
                    flex-grow: 1;
                }

                .m-FormElement__submit {
                    border-bottom-right-radius: 6px;
                    border-top-right-radius: 6px;
                    flex-basis: 140px;
                }
            }
        }

         // MD + BEGIN
        @include mediaq('>MD') {
            position: relative;
            padding: 0;

            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                bottom: 0;
                width: 1px;
                background: variable('primary');
                mix-blend-mode: screen;
            }

            // __Row
            &__row {
                align-items: center;
            }

            // __start
            &__start {
                &--button {
                    width: 320px;
                    height: 320px;

                    &__inner {
                        .Editable {
                            span {
                                @include rem(20);
                            }
                        }
                    }

                    &--icon {
                        transform: translate3d(0, 0, 0);
                        transition: all $ease-in .45s;
                    }

                    &:hover {
                        &:before {
                            background: variable('primary-light');
                        }
                    }

                    &:hover & {
                        &--icon {
                            transform: translate3d(10px, 0, 0);
                        }
                    }
                }
            }

            // __form
            &__form {
                // padding-top: 230px;
                // padding-bottom: 230px;
                padding-top: 130px;
                padding-bottom: 130px;

                &__inner {
                    text-align: left;
                }

                &--group {
                    margin: 0;
                }
            }
        }
        // MD + END

        // LG + BEGIN
        @include mediaq('>LG') {
            // __form
            &__form {
                padding-top: 230px;
                padding-bottom: 230px;
            }
        }
        // LG + END
    }
</style>
