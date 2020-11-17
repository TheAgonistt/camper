<template>
	<div>
		<span class="ResponsiceWitness has-breakpoints" style="z-index: 9999; top: 0; position: fixed; width: 40px; height: 40px;"></span>
		
		<Nav />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
// ** Components
import Nav from '~/components/navigation/navigation.vue';
import Footer from '~/components/shared/footer.vue';

export default {
	components: {
		Nav,
		Footer
	},

	watch: {
		'$route': {
			deep: true,
			handler: function (refreshPage) {
				this.$store.commit("hamburger/close")
			}
		}
	}
}
</script>