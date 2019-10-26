<template>
	<li class="px-4 py-2" :class="{'active': isActive, 'text-gray-700': canEnter, 'text-gray-300': !canEnter}">
        <nuxt-link :class="{'text-gray-300 cursor-default': !canEnter}" :disabled="!canEnter" :event="!canEnter ? '' : 'click'" class="flex items-center" :to="step.path">{{step.title}} <i v-show="step.completed" class="ml-auto fa fa-check text-green-500"></i></nuxt-link>
	</li>
</template>

<script>
export default {
	name: 'SidebarLink',
	props: {
        step: Object,
        steps: Array
	},
	computed: {
		isActive: function() {
			return this.$route.path == this.step.path
        },
        canEnter(){
            let index = this.steps.findIndex(i=>i.path == this.step.path);
            if(index == 0) {
                return true
            }
            if(this.steps[index - 1].completed) {return true}
            return false
        }
	},
}
</script>

<style lang="postcss" scoped>
.active {
	@apply text-brand-500 bg-gray-75 rounded;
}
</style>