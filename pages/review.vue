<template>
	<div class="form-container">
		<div class="form-main-full">
			<div class="font-bold text-gray-700">Review your operations and payroll</div>
			<div class="mt-10 text-gray-700">
				<div class="flex pb-2 border-b uppercase text-gray-500 text-xs tracking-wide font-bold">
					<div class="w-2/3">Operation</div>
					<div class="w-1/6 text-right">Employees</div>
					<div class="w-1/6 pl-2 text-right">Payroll</div>
				</div>
				<div v-for="code in operations" :key="code.code" class="flex py-5 border-t first:border-t-0">
					<div class="w-2/3 text-sm text-gray-700 font-medium pr-10">
						<span v-if="code.code">{{code.code}} -</span>
						{{code.description}}
					</div>
					<div class="w-1/6 text-right">{{code.employees}}</div>
					<div class="w-1/6 pl-2 text-right">{{code.payroll | currency}}</div>
				</div>
			</div>
			<div class="flex mt-16">
				<button
					@click="startOver"
					class="rounded px-4 py-2 bg-brand-500 text-white hover:bg-orange-600 ml-auto"
				>
					Start Over
					<i class="fa fa-undo ml-1"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { get, set, sync } from 'vuex-pathify'
import InputText from '~/components/InputText'

export default {
	head() {
		return {
			title: 'Review'
		}
	},
	components: { InputText },
	computed: {
		...sync('form/*')
	},
	methods: {
		completeStep(path) {
			this.$store.commit('steps/COMPLETE_STEP', path)
			this.$router.push('/review')
		},
		updateCode(key, value, index) {
			// console.log(e);
			this.$store.set(`form/operations@${index}.${key}`, value)
		},
		removeCode(code) {
			this.$store.commit('REMOVE_OPERATION', code)
        },
        startOver(){
            window.location.href = "/"
        }
	}
}
</script>

<style lang="postcss" scoped>
</style>