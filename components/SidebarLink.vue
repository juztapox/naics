<template>
	<li class="px-4 py-2 text-gray-700" :class="{'active': isActive}">
		<nuxt-link class="flex items-center" :to="step.path">{{step.title}} <i v-show="step.completed" class="ml-auto fa fa-check text-gray-400"></i></nuxt-link>
	</li>
</template>

<script>
export default {
	name: 'SidebarLink',
	props: {
		step: Object
	},
	computed: {
		isActive: function() {
			return this.$route.path == this.step.path
		}
	}
}
</script>

<style lang="postcss" scoped>
.active {
	@apply text-orange-600 bg-gray-200 rounded font-medium;
}
</style>