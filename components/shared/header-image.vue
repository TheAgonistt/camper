<template>
	<div class="c-HeaderImage BlockColor--primary">
        <div class="c-HeaderImage--filter"></div>
        <picture>
            <source :srcset="this.images.mobile" media="(max-width: 479px)">
            <source :srcset="this.images.desktop" media="(min-width: 480px)">
            <img :src="this.images.desktop" alt="">
        </picture>
	</div>
</template>

<script>
// assets
// import Arrow from "~/assets/img/icons/arrow-long-right.svg?inline";

// ** Components
// import Breadcrumb from '~/components/shared/breadcrumb.vue';

export default {
	name: 'HeaderImage',
	components: {
		// Breadcrumb
	},

	props: {
		images: {
			type: Object,
			default: null,
		},
	},

	data() {
		return {}
	},

	methods: {
	}
}
</script>

<style lang="scss" scoped>
	.c-HeaderImage {
        position: relative;
        
        &--filter {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba($primary, 0.48) 0%, rgba($primary, 0) 100%);
            background-blend-mode: multiply;
        }

        img {
            display: block;
            margin: 0 auto;
            object-fit: cover;
            object-position: center center;
            width: 100%;
            max-width: none;
            max-height: 720px;
        }
	}
</style>
