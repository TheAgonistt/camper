<template>
	<div>
		<Header />
		<About />
		<TextCarousel />
		<Video />
		<Gallery />
		<Newsletter />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

// ** Components
import Header from '~/components/home/header.vue'
import About from '~/components/home/about.vue'
import TextCarousel from '~/components/home/textcarousel.vue'
import Video from '~/components/home/video.vue'
import Gallery from '~/components/home/gallery.vue'
import Newsletter from '~/components/home/newsletter.vue'

export default {
	name: 'Home',

	components: {
		Header,
		About,
		TextCarousel,
		Video,
		Gallery,
		Newsletter,
	},

	props: {
	},

	data() {
		return {
		}
	},

	computed: {
	},

	methods: {
	},

	created() {
	}
}
</script>
