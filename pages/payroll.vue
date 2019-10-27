<template>
	<div class="form-container">
		<div class="form-main-full">
			<div class="font-bold text-gray-700">Estimated annual payroll by operation type</div>
			<div class="mt-10">
				<div class="flex pb-2 border-b uppercase text-gray-500 text-xs tracking-wide font-bold">
					<div class="w-1/2">Operation</div>
					<div class="w-1/6">Employees</div>
					<div class="w-2/6 pl-2">Payroll</div>
				</div>
				<div
					v-for="(code, index) in operations"
					:key="code.code"
					class="flex py-5 border-t first:border-t-0 items-center"
				>
					<div class="w-1/2 text-sm text-gray-700 font-medium pr-10">
						<span v-if="code.code">{{code.code}} -</span>
						{{code.description}}
					</div>
					<div class="w-1/6">
						<input
							type="number"
							class="text-input text-input w-32"
							:value="code.employees"
							@input="updateCode('employees', $event.target.value, index)"
						/>
					</div>
					<div class="flex items-center w-2/6 pl-2">
						<input
							type="number"
							class="text-input text-input w-32"
							:value="code.payroll"
							@input="updateCode('payroll', $event.target.value, index)"
						/>
						<a class="text-gray-500 ml-10 cursor-pointer hover:text-gray-600" @click.prevent="removeCode(code)">
							<i class="fa fa-times-circle"></i>
						</a>
					</div>
				</div>
				<div class="flex mt-16">
					<button
						@click="completeStep('/payroll')"
						class="rounded px-4 py-2 bg-brand-500 text-white hover:bg-orange-600 ml-auto"
					>
						Review
						<i class="fa fa-chevron-right ml-1"></i>
					</button>
				</div>
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
			title: 'Payroll'
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
			console.log('removing code', code.code)
			this.$store.commit('form/REMOVE_OPERATION', code)
		}
	}
}
</script>

<style lang="postcss" scoped>
</style>