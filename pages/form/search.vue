<template>
	<div class="form-container">
		<div class="form-main">
			<InputText
				label="Operations Code Search"
				info="Select one or more operations that describe your business."
			>
				<InputNaics @select="addCode"></InputNaics>
			</InputText>
			<div class="mt-8">
				<div
					class="code-card flex items-center relative mt-5 rounded p-4 shadow bg-white font-medium text-gray-700"
					v-for="code in naics_codes"
					:key="code.$index"
				>
					{{code.title}}
					<a class="remove-button" @click="removeCode(code)">
						<i class="fa fa-trash"></i>
					</a>
				</div>
			</div>

			<div class="flex mt-10">
				<button
					@click="completeStep('/form/description')"
					class="ml-auto rounded px-4 py-2 bg-orange-500 text-white hover:bg-orange-600"
				>
					Description
					<i class="fa fa-chevron-right ml-1"></i>
				</button>
			</div>
		</div>
		<div class="form-aside">
			<div v-show="suggestions.length">
				<h3 class="text-lg font-bold">Suggested Operations</h3>
				<p
					class="text-sm mt-2 leading-snug"
				>We've collected some more operations related to your current selections. Add them as you see fit.</p>
				<ul class="mt-6">
					<li
						class="suggestion font-medium px-3 py-2 flex items-center rounded hover:bg-gray-200 hover:text-gray-900 cursor-pointer"
						v-for="code in suggestions"
						:key="code.index"
						@click="addCode(code)"
					>
						<span class="text-sm leading-snug">{{code.title}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { get, set, sync } from 'vuex-pathify'
import InputText from '~/components/InputText'
import InputNaics from '~/components/InputNaics'

export default {
	head() {
		return {
			title: 'Search'
		}
	},
	components: { InputText, InputNaics },
	computed: {
		...sync('form/*')
	},
	methods: {
		addCode(code) {
			// Check for duplicate codes before adding
			if (!this.naics_codes.find(c => c.code == code.code)) {
				this.$store.commit('form/ADD_CODE', code)
				this.$store.dispatch('form/getSuggestions', code.code)
			}
		},
		removeCode(code) {
			this.$store.commit('form/REMOVE_CODE', code)
			this.$store.commit('form/REMOVE_SUGGESTIONS_BY_REF_CODE', code.code)
		},
		completeStep(path) {
			this.$store.commit('steps/COMPLETE_STEP', '/form/search')
			this.$router.push(path)
		}
	}
}
</script>

<style lang="postcss" scoped>
.code-card {
	.remove-button {
		@apply absolute rounded-full text-gray-400 bg-white cursor-pointer;

		right: 16px;
		height: 30px;
		width: 30px;
		text-align: center;
		display: flex;
		align-items: center;
		opacity: 0;
		transition: all linear 0.1s;

		i {
			margin: auto;
		}

		&:hover {
			@apply bg-gray-200 text-gray-700;
		}
	}

	&:hover .remove-button {
		@apply shadow;
		opacity: 1;
	}
}

.suggestion {
	a {
		opacity: 0;
	}
	&:hover a {
		opacity: 1;
	}
}
</style>