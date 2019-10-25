import { make } from 'vuex-pathify'

function state() {
	return {
		list: [
			{
				title: 'General',
				path: '/form/general'
			},
			{
				title: 'Location',
				path: '/form/location'
			},
			{
				title: 'Search',
				path: '/form/search',
            },
            {
                title: 'Description',
                path: '/form/description'
			},
			{
				title: 'Payroll',
				path: '/form/payroll'
			},
			{
				title: 'Review',
				path: '/form/review'
			}
		]
	}
}

const mutations = {
	// create SET_VALUE automatically
	...make.mutations(state),

	// add manual mutation
	COMPLETE_STEP: (state, payload) => {
		for (let index = 0; index < state.list.length; index++) {
			const step = state.list[index]
			if (step.path == payload) {
				step.completed = true
				return step
			}
			if (step.children) {
				for (let index = 0; index < step.children.length; index++) {
					const child = step.children[index]
					if (child.path == payload) {
						child.completed = true
						return child
					}
				}
			}
		}
		console.log(`Step with path ${payload} not found`)
		return false
	}
}

export default {
	namespaced: true,
	state,
	mutations
}
