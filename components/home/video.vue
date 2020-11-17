<template>
	<section class="m-Video BlockColor--primary" id="video">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="m-Video__inner">
                        <div class="m-Video--block">
                            <button
                                class="m-Video--block--button"
                                type="button"
                                @click="showVideo"
                            >
                                <div class="m-Video--block--button--image">
                                    <picture>
                                        <source :srcset="image_mobile" media="(max-width: 479px)">
                                        <source :srcset="image_tablet" media="(max-width: 720px)">
                                        <img :src="image_desktop">
                                    </picture>
                                </div>

                                <div class="m-Video--block--button--icon BlockColor--primary">
                                    <Arrow />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</section>
</template>

<script>
// assets
import Arrow from "~/assets/img/icons/arrow-right.svg?inline";

// components
import Link from '~/components/shared/link.vue';

export default {
	name: 'Video',
	components: {
        Arrow,
		Link
    },
    
    data: function() {
		return {
            image_mobile: 'https://source.unsplash.com/random/480x286?drone',
            image_tablet: 'https://source.unsplash.com/random/720x396?drone',
            image_desktop: 'https://source.unsplash.com/random/1200x660?drone',
        }
    },
    
    methods: {
        showVideo() {
            alert('Soon!')
        },
    },
}
</script>

<style lang="scss">
    .m-Video {
        padding-bottom: 40px;

        &--block {
            position: relative;

            &--button {
                position: relative;
                border: none;
                background: transparent;
                padding: 0;
                width: 100%;

                &--icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    transform: translate3d(-50%, -50%, 0);
                }
            }
        }

        // SM + BEGIN
        @include mediaq('>SM') {
        }
        // SM + END

        // MD + BEGIN
        @include mediaq('>MD') {
            padding-bottom: 80px;
        }
        // MD + END

        // LG + BEGIN
        @include mediaq('>LG') {
        }
        // LG + END
    }
</style>
