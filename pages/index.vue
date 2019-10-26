<template>
	<div class="h-full flex items-center bg-gray-800">
		<div class="rounded-lg shadow-md w-1/3 h-64 mt-10 bg-white p-2 mx-auto">
			<div class="text-center my-16">
				<h1 class="text-2xl font-medium">State of Ohio Demo</h1>
				<p class="mb-8 text-gray-600 text-lg">Give me a subtitle</p>
				<nuxt-link
					to="/form/general"
					class="border-brand-500-500-500 hover:border-brand-500-500-600 border px-4 py-2 rounded text-orange-100 hover:text-white bg-brand-500 hover:bg-brand-600 shadow"
				>Begin Demo</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    layout: 'none'
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
