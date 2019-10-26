<template>
	<div>
		<label v-if="label" class="text-gray-800 font-bold">{{label}}</label>
		<div class="text-sm text-gray-600" v-if="info">{{info}}</div>
		<div class="mt-3">
            <slot></slot>
        </div>
        
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