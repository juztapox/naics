<template>
	<div class="relative" v-click-outside="clearResults">
		<div class="input-naics">
			<i class="fa fa-search text-gray-400"></i>
			<input type="text" class="text-input pl-12" @input="searchNaics" v-on:keyup.enter="searchNaics" ref="searchInput" placeholder="Search one word at a time e.g. 'restaurant'" />
            <a href="" class="text-gray-400 hover:text-gray-600" @click="clearSearch">
                <i class="fa fa-times" v-show="currentSearchValue"></i>
            </a>
		</div>
		<ul v-if="results.length" class="results overflow-hidden absolute relative mt-2 bg-white rounded-lg shadow-xl" aria-haspopup="true">
			<li
				class="block px-4 py-2 border-t truncate cursor-pointer hover:bg-gray-200 w-full"
                tabindex="0"
				v-for="code in results"
				:key="code.$index"
                @click="selectCode(code)"
			>{{code.title}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false,
			results: [],
            res: null,
            currentSearchValue: ''
		}
	},
	mounted() {
		const handleEscape = e => {
			if (e.key === 'Esc' || e.key === 'Escape') {
				this.results = []
			}
		}
		document.addEventListener('keydown', handleEscape)
		this.$once('hook:beforeDestroy', () => {
			document.removeEventListener('keydown', handleEscape)
		})
    },
	methods: {
		async searchNaics(e) {
            this.currentSearchValue = e.target.value;
			let combined = []
			let query = e.target.value
			if (query.length < 3) return false
			query = query.toLowerCase()
			let queries = query.split(' ')
			for (let index = 0; index < queries.length; index++) {
				const q = queries[index]
				let res = await this.$axios.$get(`/?query=${q}`, {port: 3001})
				combined = combined.concat(res)
			}

			if (combined) {
				combined = combined.filter(
					(code, index, self) =>
						index ===
						self.findIndex(
							t => t.code === code.code
						)
				)
				this.results = combined
			}
		},
		selectCode(code) {
            this.$emit('select', code);
            this.clearResults();
            this.$refs.searchInput.focus();
		},
		clearResults() {
			this.results = []
        },
        clearSearch(e){
            let input = this.$refs.searchInput;
            input.value = '';
            this.clearResults();
        }
	}
}
</script>

<style lang="postcss" scoped>
.input-naics {
	position: relative;
}

i.fa-search {
	position: absolute;
	font-size: 24px;
	top: 11px;
	left: 14px;
}

i.fa-times {
	position: absolute;
	font-size: 24px;
	top: 11px;
	right: 14px;
}

.results a {
	/* width: 800px; */
}
</style>