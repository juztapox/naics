<template>
	<div class="form-container">
		<div class="form-main">
			<InputText label="Physical Address" info="If outside Ohio, provide out-of-state location.">
				<InputLocation @select="getAddressData" :address="address"></InputLocation>
			</InputText>

			<div class="flex mt-10">
				<InputText label="Phone" class="w-full">
					<input type="text" class="text-input" v-mask="'(###)-###-####'" placeholder="(555)-867-5309" v-model="phone" />
				</InputText>
				<div class="spacer"></div>
				<InputText label="Fax" class="w-full">
					<input type="text" class="text-input" v-mask="'(###)-###-####'" placeholder="(800)-588-2300" v-model="fax" />
				</InputText>
			</div>

			<div class="flex mt-10">
				<InputText label="Email" class="w-full">
					<input type="text" class="text-input" v-model="email" placeholder="youremail@address.com" />
				</InputText>
				<div class="spacer"></div>
				<InputText label="Website" class="w-full">
					<input type="text" class="text-input" v-model="website" placeholder="www.yourbusiness.com" />
				</InputText>
			</div>

			<div class="flex mt-10">
				<button
					@click="completeStep('/operations')"
					class="ml-auto rounded px-4 py-2 bg-brand-500 text-white hover:bg-brand-600"
				>
					Operations
					<i class="fa fa-chevron-right ml-1"></i>
				</button>
			</div>
		</div>
		<aside class="form-aside text-sm leading-snug">
			<p
				class="mb-6"
			>Please provide general business information for your primary location. If you do not have an Ohio location, provide your primary, physical (out-of-state) location.</p>
			<p>
				<strong>Note:</strong> If your mailing address is different than your primary location you’ll need to enter both your mailing and primary physical locations.
			</p>
		</aside>
	</div>
</template>

<script>
import { get, set, sync } from 'vuex-pathify'

import InputLocation from '~/components/InputLocation'
import InputText from '~/components/InputText'

export default {
	head() {
		return {
			title: 'General'
		}
	},
	components: { InputLocation, InputText },
	methods: {
		getAddressData(address) {
			this.$store.set('form/address', address.formatted_address)
        },
        completeStep(path){
            this.$store.commit('steps/COMPLETE_STEP', '/location')
            this.$router.push(path)
        }        
	},
	computed: {
		...sync('form/*')
	}
}
</script>

<style>
.spacer {
	width: 64px;
}
</style>