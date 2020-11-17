<template>
	<div>
		<Header title="Contact" :images="this.images"/>
		<Form />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

// ** Components
import Header from '~/components/shared/header-title-image.vue'
import Form from '~/components/contact/form.vue'

export default {
	name: 'Services',

	components: {
		Header,
		Form,
	},

	props: {
	},

	data() {
		return {
			images: {
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
