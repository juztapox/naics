<template>
	<div class="form-container">
		<div class="form-main">
			<InputText label="Business Name" info="Legal business name or homeowner">
				<input type="text" class="text-input" v-model="business_name" />
			</InputText>
			<InputText
				class="mt-10"
				label="Business Entity Type"
				info="Entity type that best describes your corporate structure"
			>
				<div class="block relative">
					<select
						v-model="business_entity"
						class="block appearance-none h-12 w-full bg-white border border-gray-200 hover:border-gray-300 px-4 py-2 pr-8 rounded shadow leading-tight text-gray-800 focus:outline-none focus:shadow-outline"
					>
						<option value>Select a business entity type</option>
						<option value="Domestic household">Domestic household</option>
						<option value="Sole proprietor">Sole proprietor</option>
						<option value="Partnership">Partnership</option>
						<option value="Limited partnership">Limited partnership</option>
						<option
							value="Limited liability company acting as a sole proprietor"
						>Limited liability company acting as a sole proprietor</option>
						<option
							value="Limited liability company acting as a partnership"
						>Limited liability company acting as a partnership</option>
						<option value="Partnership">Limited liability company acting as a corporation</option>
						<option value="Partnership">Corporation</option>
						<option value="Partnership">Individual incorporated as a corporation</option>
						<option value="Partnership">Family farm corporation</option>
						<option value="Partnership">Association</option>
						<option value="Partnership">State/Local government</option>
					</select>
					<div
						class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
					>
						<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
			</InputText>

			<!-- Two col -->
			<div class="mt-10 or-inputs flex">
				<div>
					<InputText class label="FEIN" info="Fed employer identification">
						<input type="text" class="text-input" v-mask="'##-#######'" v-model="fein" />
					</InputText>
				</div>
				<span class="or">
					<span class="text-gray-600">or</span>
				</span>
				<div>
					<InputText class label="Social Security #" info="Required if no FEIN">
						<input type="text" class="text-input" v-mask="'###-##-####'" v-model="ssn" />
					</InputText>
				</div>
			</div>

			<InputText
				class="mt-10"
				label="Start Date"
				info="Date employees first earned wages. If no employees use today."
			>
				<input type="date" class="text-input" v-model="state_date" />
			</InputText>

			<div class="flex mt-10">
				<button
					@click="completeStep('/form/location')"
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
			>Ohio law requires employers to obtain workers’ compensation coverage for their employees from the first date of hire. Indicate the date your employees first earned wages in Ohio or the date you estimate your employees will first earn wages in Ohio.</p>
			<p
				class="mb-6"
			>Be sure to supply your federal employer identification number (FEIN).You can obtain a FEIN number by calling the Internal Revenue Service. If you have applied for a FEIN, but have not received one, write “applied for” in the appropriate box, and you may supply it at a later date.</p>
			<p
				class="mb-6"
			>Domestic household employers, sole proprietors and partnerships who do not need a FEIN should supply a Social Security number of the sole proprietor, one of the home owners or partners.</p>
		</aside>
	</div>
</template>

<script>
import { get, set, sync } from 'vuex-pathify'
import InputText from '~/components/InputText'

export default {
	head() {
		return {
			title: 'General'
		}
	},
	components: { InputText },
	computed: {
		...sync('form/*')
	},
	methods: {
		completeStep(path) {
			this.$store.commit('steps/COMPLETE_STEP', '/form/general')
			this.$router.push(path)
		}
	}
}
</script>

<style lang="postcss" scoped>
.or {
	position: relative;
	width: 60px;

	span {
		position: absolute;
		bottom: 13px;
		font-style: italic;
		text-align: center;
		width: 100%;
	}
}
</style>