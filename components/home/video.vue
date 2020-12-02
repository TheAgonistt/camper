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
                                @click="playVideo"
                            >
                                <div class="m-Video--block--button--image">
                                    <picture>
                                        <source :srcset="this.data.video.img" media="(max-width: 479px)">
                                        <source :srcset="this.data.video.img" media="(max-width: 720px)">
                                        <img :src="this.data.video.img">
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

        <div
            class="m-VideoPlayer"
            :class="this.videoPlaying ? 'is-playing': ''"
        >
            <div
                class="m-VideoPlayer__backdrop"
                @click="closeVideo"
            ></div>

            <div class="m-VideoPlayer__frame">
                <div class="m-VideoPlayer__frame__close"></div>
                <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
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
            videoId: 'aDoanNM7O_s',
            videoPlaying: false,
        }
    },

    props: {
		data: Object
	},
    
    methods: {
        playVideo() {
            this.player.playVideo();
            this.videoPlaying = true;
        },
        playing() {
            // console.log('\o/ we are watching!!!')
        },
        closeVideo() {
            // console.log('video closed !');
            this.player.pauseVideo();
            this.videoPlaying = false;
        }
    },
    computed: {
        player() {
            return this.$refs.youtube.player
        }
    }
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

    .m-VideoPlayer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 30px;
        opacity: 0;
        pointer-events: none;
        transition: all $ease-in .45s;
        z-index: 5000;

        &__backdrop {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: variable('black');
            opacity: 0.95;
            // z-index: 5000;
        }

        &__frame {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            padding-bottom: 56.25%;
            transform: translate3d(-50%, -50%, 0);

            &__close {
                position: absolute;
                top: -30px;
                right: 30px;
                width: 30px;
                height: 30px;
                pointer-events: none;
                &:before, &:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 25px;
                    height: 2px;
                    background: variable('white');
                }
                &:before {
                    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
                }
                &:after {
                    transform: translate3d(-50%, -50%, 0) rotate(45deg);
                }
            }

            iframe {
                position: absolute;
                top: 15px;
                left: 15px;
                width: calc(100% - 30px);
                height: calc(100% - 30px);
                border: 0;
            }
        }

        &.is-playing {
            opacity: 1;
            pointer-events: all;
        }

        @include mediaq('>MD') {
            padding: 60px;
        }
    }
</style>
