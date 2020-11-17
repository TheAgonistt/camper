<template>
	<div id="app">
		<!-- <Microbrasserie :pageID="PAGE_ID" /> -->
		<Header title="Personnalisation de campeur" />
	</div>
</template>

<script>
import { mapGetters } from "vuex"

// ** Components
import Header from '~/components/shared/header.vue'

export default {
	components: {
		Header
	},

	// ** first, check if the store is already ** //
	async fetch({ store, params }) {
		// const id = params.id
		// const slug = params.slug
	},

	data() {
		// return {
		// 	id: this.$route.params.slug, // $route.id
		// 	PAGE_ID: null,
		// 	seo_title: `Route des brasseurs | Microbrasserie`,
		// 	seo_desc: null,
		// 	seo_image: `${process.env.baseUrl}/og-image.png`
		// }
	},

	computed: {
		// ...mapGetters({
		// 	getMicroBySlug: "microbrasseriesdata/getMicrobrasserieBySlug",
		// 	getMicroTitleByID: "microbrasseriesdata/getMicrobrasserieTitleByID",
		// 	getSEO: "microbrasseriesdata/getContentSEOByID"
		// })
	},

	created() {
		// // set the route id
		// if (!this.$route.params.id) {
		// 	this.PAGE_ID = this.getMicroIDBySlug(this.$route.params.slug).data.id;
		// } else {
		// 	this.PAGE_ID = this.$route.params.id;
		// }

		// this.setGlobalSiteTitle()
		// this.setSEO()
	},

	methods: {
	},

	validate({ params, query, store }) {
		// // if the route has an id
		// if (params.id) {
		// 	// Must be a number
		// 	return /^\d+$/.test(params.id)
		// }

		// // if the route has a slug
		// if (params.slug) {
		// 	// Must be a string
		// 	return typeof params.slug === "string"
		// }

		// throw new Error('Une erreur est survenue')
	},

	head() {
		// return {
		// 	titleTemplate: this.seo_title || 'Route de 12 microbrasseries en Mauricie - La Route des Brasseurs',
		// 	meta: [
		// 		// hid is used as unique identifier. Do not use `vmid` for it as it will not work
		// 		{
		// 			hid: "title",
		// 			name: "title",
		// 			content: this.seo_title || 'Route de 12 microbrasseries en Mauricie - La Route des Brasseurs'
		// 		},
		// 		{
		// 			hid: "description",
		// 			name: "description",
		// 			content: this.seo_desc
		// 		},
		// 		{
		// 			hid: "og:image",
		// 			property: "og:image",
		// 			content: this.seo_image
		// 		},
		// 		{
		// 			hid: "og:title",
		// 			name: "og:title",
		// 			content: this.seo_title || 'Route de 12 microbrasseries en Mauricie - La Route des Brasseurs'
		// 		},
		// 		{
		// 			hid: "og:description",
		// 			name: "og:description",
		// 			content: this.seo_desc || 'De Trois-Rivières à La Tuque, de Ste-Anne-de-la-Pérade à St-Alexis-des-Monts, La Route vous fera découvrir la richesse du terroir brassicole de la région.'
		// 		},
		// 	]
		// }
	}
}
</script>
