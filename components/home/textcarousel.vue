<template>
	<section class="m-TextCarousel BlockColor--primary" id="tagline">
        <div class="m-TextCarousel__inner">
            <div class="m-TextCarousel--text">
                <client-only
                    placeholder="Loading..."
                >
                    <infinite-slide-bar
                        duration="440s"
                        :barStyle="{ 'animation-fill-mode': 'both' }"
                    >
                        <span class="TextColor--secondary">prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - prêt pour l’aventure — vivez l’expérience nav - </span>
                    </infinite-slide-bar>   
                </client-only>
            </div>
        </div>
	</section>
</template>

<script>
// components
import Link from '~/components/shared/link.vue';

export default {
	name: 'TextCarousel',
	components: {
		Link
    },
    
    data: function() {
		return {}
	},
}
</script>

<style lang="scss">
    .m-TextCarousel {
        position: relative;
        display: flex;
        align-items: center;
        height: 200px;
        overflow: hidden;

        &--text {
            // position: absolute;
            // top: 50%;
            // left: 50%;
    
            // 
            // transform: translate3d(-50%, -50%, 0);

            span {
                @include rem(48);
                font-weight: variable('font-bold');
                line-height: 1.375;
                letter-spacing: 0em;
                white-space: nowrap;
                overflow: hidden
            }
        }

        // SM + BEGIN
        @include mediaq('>SM') {
            height: 280px;

            &--text {
                span {
                    @include rem(60);
                }
            }
        }
        // SM + END

        // MD + BEGIN
        @include mediaq('>MD') {
            height: 360px;

            &--text {
                span {
                    @include rem(80);
                }
            }
        }
        // MD + END

        // LG + BEGIN
        @include mediaq('>LG') {
            height: 440px;

            &--text {
                span {
                    @include rem(96);
                }
            }
        }
        // LG + END
    }
</style>
