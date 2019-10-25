<template>
    <div class="form-container">
        <div class="form-main">
            <h2 class="text-xl font-bold text-gray-700">All done.</h2>
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
        completeStep(path){
            this.$store.commit('steps/COMPLETE_STEP', path)
            this.$router.push(path)
        }
    }
}
</script>

<style lang="postcss" scoped>

</style>