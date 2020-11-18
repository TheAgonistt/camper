<template>
	<div id="app">
		<Home :data="this.page" />
	</div>
</template>

<script>
// ** Modules
import axios from     'axios';
import { mapGetters } from "vuex";

// ** Components
import Home from '~/components/home/home.vue'

export default {
	head() {
		return {
			title: 'Home',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content: 'yo'
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: ''
				}
			],
			script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
		}
	},

	async asyncData ({ $content }) {
		const page = await $content('index').fetch()

		return {
			page
		}
	},

	components: {
		Home,
	},

	data() {
		return {
		}
	},

	content: {
	// Only search in title and description
		fullTextSearchFields: ['title'],
		nestedProperties: [
			'title.en',
			'title.fr',
			'header.en',
			'header.fr',
		]
	},

	computed: {
	},

	methods: {
	},

	created() {
	}
}
</script>
