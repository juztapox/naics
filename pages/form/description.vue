<template>
	<div class="form-container">
		<div class="form-main">
			<InputText label="Description of Operations">
                <textarea class="text-input mt-4" cols="30" rows="8" placeholder="Describe your operations" v-model="description_operations"></textarea>
			</InputText>
			<div class="flex mt-10">
				<button
					@click="completeStep('/form/payroll')"
					class="ml-auto rounded px-4 py-2 bg-orange-500 text-white hover:bg-orange-600"
				>
					Payroll
					<i class="fa fa-chevron-right ml-1"></i>
				</button>
			</div>
		</div>
		<aside class="form-aside text-sm">
            <p>Describe your primary services or products, including your methods of operations. Include raw and semifinished materials used, machinery, equipment and tools.</p>
            <p class="mt-6"><strong>Note:</strong> It is important for you to provide as much information as possible for BWC to properly determine your correct classification.</p>
		</aside>
	</div>
</template>

<script>
import { get, set, sync } from 'vuex-pathify'
import InputText from '~/components/InputText'

export default {
	head() {
		return {
			title: 'Description'
		}
	},
	components: { InputText },
	computed: {
		...sync('form/*')
    },
    methods: {
        completeStep(path){
            this.$store.dispatch('form/getWCC')
            .then(()=>{
                this.$store.commit('steps/COMPLETE_STEP', '/form/description')
                this.$router.push(path)
            })
        }
    }
}
</script>

<style lang="postcss" scoped>
textarea.text-input {
    height: auto;
}
</style>