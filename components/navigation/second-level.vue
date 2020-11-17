<template>
	<div
        class="c-Nav__second-level"
        ref="wrapper"
    >
        <ul class="noop">
            <li v-for="j in 3" :key="j">
                <Arrow />
                <a class="TextColor--white" href="">Sous service {{j}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
// assets
import Arrow from "~/assets/img/icons/arrow-long-right.svg?inline";

export default {
    name: 'SecondLevel',
    components: {
        Arrow,
    },
    props: {
        subOpen: false
    },
    data: function() {
		return {
			originalHeight: Number
		}
	},
    watch: {
        subOpen: function(val) {
            const wrapper = this.$refs.wrapper;

            if (this.subOpen) {
                wrapper.style.height = `${this.originalHeight}px`;

                return
            }

            wrapper.style.height = '0';
        }
    },
    mounted: function() {
        const wrapper = this.$refs.wrapper;
        const height = wrapper.scrollHeight;
        this.originalHeight = height;

        wrapper.style.height = '0px';
    },
}
</script>