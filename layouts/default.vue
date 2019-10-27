<template>
  <div class="bg-gray-50">
    <TopNav></TopNav>
	<div class="container mx-auto flex mt-16 pb-10">
		<Sidebar class="sidebar-container"></Sidebar>
        <div class="form-view w-5/6">
		    <nuxt />
        </div>
	</div>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
import Sidebar from '~/components/Sidebar'

export default {
    components: { 
        TopNav,
        Sidebar
    }
}
</script>