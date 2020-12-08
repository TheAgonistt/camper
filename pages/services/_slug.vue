<template>
	<div v-if="post">
		<Header :title="post.title" />
		<HeaderImage :images="header_images" />
	</div>
</template>


<script>
import { mapGetters } from "vuex"

// ** Components
import Header from '~/components/shared/header.vue'
import HeaderImage from '~/components/shared/header-image.vue'
import Content from '~/components/shared/text.vue'

export default {
	name: 'Service',
	components: {
		Header,
		HeaderImage,
		Content,
	},

	async asyncData({ $content, params, error }) {
		let post;
		try {
			post = await $content('services',params.slug).fetch()
		} catch (e) {
			error({ message: "Ce services n'existe pas" });
		}

		return {
			post,
			header_images: {
				mobile: post.header.img,
				desktop: post.header.img,
			}
		};
	},
};
</script>
