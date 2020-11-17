<template>
	<div>
		<Header title="À propos" />
		<HeaderImage :images="this.images_top" />
		<Content :intro="this.intro" :content="this.content" />
		<HeaderImage :images="this.images_bottom" />
		<Content :content="this.content2" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

// ** Components
import Header from '~/components/shared/header.vue'
import HeaderImage from '~/components/shared/header-image.vue'
import Content from '~/components/shared/text.vue'

export default {
	name: 'About',
	components: {
		Header,
		HeaderImage,
		Content,
	},

	data() {
		return {
			images_top: {
				mobile: 'https://source.unsplash.com/random/1487x720?camper',
				desktop: 'https://source.unsplash.com/random/1487x720?camper',
			},
			images_bottom: {
				mobile: 'https://source.unsplash.com/random/1487x720?camper',
				desktop: 'https://source.unsplash.com/random/1487x720?camper',
			},
			intro: '<p>Odio vitae sit orci feugiat. Elementum magna ut ut convallis sapien suspen disse sed pretium aliquam. Et morbi commodo vestibulum, adipiscing risus.</p>',

			content: '<h2>H2 Elementum magna ut convallis</h2><p>Interdum facilisi facilisis amet, enim bibendum posuere. Diam nulla vestibulum, tincidunt turpis orci magna tortor ut. Enim elit sit vitae mattis elit at lacus, sed. Dolor suspendisse facilisi etiam id morbi nec. Id urna non urna faucibus ac a pellentesque.</p><h3>H3 Morbi commodo vestibulum</h3><p>Erat vitae scelerisque blandit dignissim vulputate risus massa risus. Cursus vel eu mattis velit. Nibh vestibulum massa malesuada malesuada donec. Diam auctor fames sem non tempor risus sed enim vitae. Arcu ac aenean viverra donec fusce odio enim.</p><h4>H4 Adipiscing risus tortor</h4><p>Risus, ut accumsan euismod eu at amet eget. Pulvinar eget et velit posuere nunc quis. Porta eu neque porttitor blandit enim at. Turpis neque, turpis aliquet sit varius sem. Volutpat elementum sapien dignissim pretium facilisis blandit sed donec.</p><h5>H5 Adipiscing risus tortor</h5><p>Vitae sit urna scelerisque pulvinar etiam suspendisse. Risus vel mauris, tristique posuere nulla vulputate. Aenean sit viverra eget a, diam amet a arcu suspendisse. Lacus tincidunt id tempor euismod viverra posuere. Sit dictum sed duis hac et.</p><p>Vitae sit urna scelerisque pulvinar etiam suspendisse. Risus vel mauris, tristique posuere nulla vulputate. Aenean sit viverra eget a, diam amet a arcu suspendisse. Lacus tincidunt id tempor euismod viverra posuere. Sit dictum sed duis hac et.</p><h6>Vitae sit urna scelerisque pulvinar</h6><p>Vitae sit urna scelerisque pulvinar etiam suspendisse. Risus vel mauris, tristique posuere nulla vulputate. Aenean sit viverra eget a, diam amet a arcu suspendisse. Lacus tincidunt id tempor euismod viverra posuere. Sit dictum sed duis hac et.</p>',

			content2: '<p>Tellus cursus est arcu eget mattis porta etiam sagittis, enim. Nibh sed molestie non netus quam suspendisse mauris. Sit arcu non, donec at. Quisque ac lectus purus varius sit. Nibh auctor sed ac convallis a augue id. Varius lectus non pellentesque donec tellus vel scelerisque habitant. Justo, dignissim felis enim augue aliquet integer egestas. Netus maecenas nisi, pharetra, adipiscing ornare in a. Tellus a eget dolor ornare. Tincidunt in ultrices aliquam nunc. Id vitae mi pellentesque posuere nunc. Aliquet ipsum blandit pulvinar mattis elementum, quam. In in semper neque, a amet eu arcu nibh dui. Cras mus urna est porttitor et, non auctor nunc.<br><br><br><br><br></p><p>Odio vitae sit orci feugiat. Elementum magna ut ut convallis sapien suspendisse sed pretium aliquam. Et morbi commodo vestibulum, adipiscing risus tortor ipsum est. Consectetur adipiscing habitant non sed.</p><h5>H5 Adipiscing risus tortor</h5><ul><li>Nibh sed molestie non netus quam suspendisse mauris</li><li>Sit arcu non, donec atuisque ac lectus purus varius sit</li><li>Nibh auctor sed ac convallis a augue id</li><li>Varius lectus non pellentesque donec tellus vel scelerisque habitant</li></ul><img src="https://source.unsplash.com/random/800x480?camper" />'
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
