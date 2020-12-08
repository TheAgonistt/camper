<template>
	<div id="app">
		<Header title="Services" />
		<ServicesList
			:services="posts"
		/>
	</div>
</template>

<script>
// ** Modules
import axios from     'axios';
import { mapGetters } from "vuex";

// ** Components
import Header from '~/components/shared/header.vue'
import ServicesList from '~/components/services/services-list.vue'

export default {
	name: 'Services',
	components: {
		Header,
		ServicesList
	},

	async asyncData({ $content, params, error }) {
		let posts;
		try {
			posts = await $content('services').fetch()
			console.log('posts: ', posts)
		} catch (e) {
			error({ message: "Ce services n'existe pas" });
		}

		return {
			posts,
		};
	},
}
</script>
