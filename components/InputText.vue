<template>
	<div>
		<label v-if="label" class="text-gray-900 font-bold">{{label}}</label>
		<div class="text-sm text-gray-600 mb-4" v-if="info">{{info}}</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		label: String,
		info: String
	}
}
</script>

<style lang="postcss" scoped>
</style>