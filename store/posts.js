import axios from 'axios';

const cpt = 'posts';

// data
export const state = () => ({
	pages: [],
	loaded: false,
})

// actions
export const actions = {
	async GET_PAGES({commit}) {
		const { data } = await axios.get(`${process.env.WP_REST_API}${cpt}/?per_page=100`, {
			auth: {
				username: process.env.protectedLogin,
				password: process.env.protectedPassword
			}
		})
		commit('set', data)
	},
}

// mutation
export const mutations = {
	set(state, payload) {
		for (const page of payload) {
			const params = {...page};
			state.pages.push({
				'data': params,
				'pageID': params.id,
				'type': params.type,
				'slug': params.slug,
				'status': params.status,
				'seo': {
					'title': params.acf.seo_title,
					'description': params.acf.seo_description,
					'image': params.acf.seo_image,
				}
			})
		}

		state.loaded = true;
	},
}

// getters
export const getters = {
	getPages: state => {
		return state.pages;
	},

	getPageByID: (state) => (pageID) => {
		return state.pages.find(
			page => page.pageID === pageID
		) 
	},

	getPageBySlug: (state) => (slug) => {
		return state.pages.find(
			page => page.slug === slug
		)
	},

	getPagesLoaded: state => {
		return state.loaded;
	},

	getPageSEOByID: (state) => (pageID) => {
		const match = state.pages.find(
			page => page.pageID === pageID
		)

		if (match) {
			const seo = {
				title: match.seo.title,
				desc: match.seo.description,
				image: match.seo.image
			}

			return seo
		}

		return null
	},
}