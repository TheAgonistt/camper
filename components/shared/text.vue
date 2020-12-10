<template>
	<div class="c-Text BlockColor--white">
        <div class="c-Text__container container">
            <div class="row">
                <div class="col-12">
                    <div 
                        v-if="this.intro"
                        class="c-Text--intro Editable"
                    >
                        <p v-html="this.intro"></p>
                    </div>

                    <nuxt-content
                        class="c-Text--content Editable"
                        :document="this.content"
                    />
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
	name: 'Content',
	components: {
		// Breadcrumb
	},

	props: {
        intro: {
			type: String,
			default: null,
        },
        content: {
            type: Object,
            default: null,
        }
	},

	data() {
		return {
            body: this.content.body,
        }
	},

	methods: {
	}
}
</script>

<style lang="scss">
	.c-Text {
        padding: 75px 0;
        // padding: 165px 0;

        &--content, &--intro {
            max-width: 720px;
            margin: 0 auto;
        }

        &--intro {
            // margin-bottom: 80px;
            margin-bottom: 50px;

            p {
                @include rem(19.2);
                line-height: 1.28;
                letter-spacing: normal;
                font-weight: variable('font-medium');
                color: variable('primary');
            }
        }

        &--content, .nuxt-content-container {
            h2 {
                margin-top: 1.5em;
                margin-bottom: 0.5em;
                @include rem(32);
                line-height: 1.04;
                font-weight: variable('font-medium');
                letter-spacing: 0.05em;
                color: variable('primary');
            }

            h3 {
                margin-top: 1.5em;
                margin-bottom: 0.5em;
                @include rem(26.6);
                line-height: 1.04;
                font-weight: variable('font-medium');
                letter-spacing: 0.05em;
                color: variable('primary');
            }

            h4 {
                margin-top: 1.5em;
                margin-bottom: 0.5em;
                @include rem(19.2);
                line-height: 1.04;
                font-weight: variable('font-medium');
                letter-spacing: 0.05em;
                color: variable('primary');
            }

            h5 {
                margin-top: 1.5em;
                margin-bottom: 0.5em;
                @include rem(12.6);
                line-height: 1.04;
                font-weight: variable('font-bold');
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: variable('primary');
            }

            h6 {
                margin-top: 1.5em;
                margin-bottom: 0.5em;
                @include rem(11);
                line-height: 1.04;
                font-weight: variable('font-bold');
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: variable('primary');
            }

            p {
                margin-bottom: 1em;
                @include rem(12.6);
                line-height: 1.28;
                letter-spacing: 0.015em;
                color: variable('primary');
            }

            ul, ol {
                li {
                    position: relative;
                    margin: 0;
                    padding: 15px 0;
                    @include rem(12.6);
                    line-height: 1.28;
                    letter-spacing: 0.015em;
                    color: variable('primary');
                }
            }

            ul {
                margin: 15px 0;
                padding: 0;
                list-style: none;

                li {
                    color: variable('primary');
                    @include make-icon('left');
                    @include make-icon-content('east');
                    padding-left: 2em;
                    &:before {
                        @include rem(20);
                    }
                    &:not(:last-child) {
                        &:after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            height: 1px;
                            background: variable('primary');
                        }
                    }
                }
            }

            img {
                margin: 60px 0;
            }
        }

        // SM + BEGIN
        @include mediaq('>SM') {
            padding: 125px 0;

            &--intro {
                margin-bottom: 82px;

                p {
                    @include rem(24);
                    line-height: 1.28;
                }
            }

            &--content {
                h2 {
                    margin-top: 2.5em;
                    @include rem(40);
                    line-height: 1.3;
                }

                h3 {
                    margin-top: 2.5em;
                    @include rem(32);
                    line-height: 1.3;
                }

                h4 {
                    margin-top: 2.5em;
                    @include rem(24);
                    line-height: 1.3;
                }

                h5 {
                    margin-top: 2.5em;
                    @include rem(16);
                    line-height: 1.3;
                }

                h6 {
                    margin-top: 2.5em;
                    @include rem(14);
                    line-height: 1.3;
                }
                
                p {
                    margin-bottom: 2em;
                    @include rem(16);
                    line-height: 1.6;
                    letter-spacing: 0.015em;
                    color: variable('primary');
                }

                ul, ol {
                    li {
                        padding: 21px 0;
                        @include rem(16);
                        line-height: 1.6;
                        letter-spacing: 0.015em;
                    }
                }

                ul {
                    li {
                        padding-left: 2.75em;
                        &:before {
                            @include rem(25);
                        }
                    }
                }
            }
        }
        // SM + END

        // MD + BEGIN
        @include mediaq('>MD') {
            padding: 165px 0;
        }
        // MD + END
	}
</style>
