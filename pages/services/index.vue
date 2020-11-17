<template>
	<div id="app">
		<Header title="Services" />
		<ServicesList
			:images1="this.images1"
			:images2="this.images2"
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

	data() {
		return {
			images1: {
				mobile: 'https://source.unsplash.com/random/1487x720?camper',
				desktop: 'https://source.unsplash.com/random/1487x720?camper',
			},
			images2: {
				mobile: 'https://source.unsplash.com/random/1487x720?camper',
				desktop: 'https://source.unsplash.com/random/1487x720?camper',
			},
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
