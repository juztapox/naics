<template>
	<div class="sidebar-component">
		<ul class="w-full">
			<SidebarLink
				v-for="step in list"
				:key="step.path"
                :step="step"
                :steps="list"
			></SidebarLink>
		</ul>
	</div>
</template>

<script>
import { get, sync } from 'vuex-pathify'

import SidebarLink from '~/components/SidebarLink'
export default {
	components: {
		SidebarLink
	},
    computed: {
        list: sync('steps/list'),
    },
}
</script>

<style>
li {
	padding: 2px 4px;
}

li > a.nuxt-link-active {
}

</style>