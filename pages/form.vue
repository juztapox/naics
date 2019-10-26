<template>
	<div class="container mx-auto flex mt-16 pb-10">
		<Sidebar class="sidebar-container"></Sidebar>
        <div class="form-view w-5/6">
		    <nuxt-child />
        </div>
	</div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
export default {
	components: {
		Sidebar
	}
}
</script>

<style>
.sidebar-container {
    width: 160px;
}
</style>