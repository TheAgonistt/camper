<template>
	<li
		:class="data.subLevelOpen ? 'is-open' : ''"
	>
		<div
			class="c-Nav__first-level"
		>
			<nuxt-link
				v-if="!item.external"
				:to="item.url"
				class="c-Nav__logo__link flex align-center TextColor--white"
			>
				<span>{{item.label}}</span>
			</nuxt-link>

			<a
				v-if="item.external"
				:href="item.url"
				target="_blank"
				class="c-Nav__logo__link flex align-center TextColor--white"
			>
				<span>{{item.label}}</span>
			</a>

			<button
				@click="triggerSubNav()"
				:class="data.subLevelOpen ? 'is-open' : ''"
			>
				<span></span>
			</button>
		</div>

		<SecondLevel 
			:sub-open="data.subLevelOpen"
		/>
	</li>
</template>

<script>
// components
import SecondLevel from '~/components/navigation/second-level.vue';

export default {
	name: 'FirstLevel',
	components: {
		SecondLevel,
	},
	
	props: {
        item: Object,
	},
	
	data: function() {
		return {
			data: {
				subLevelOpen: false,
			}
		}
	},
	
	methods: {
		triggerSubNav() {
			this.data.subLevelOpen = !this.data.subLevelOpen
		}
	}
}
</script>
