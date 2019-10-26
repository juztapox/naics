import { make } from 'vuex-pathify'

function state() {
	return {
		list: [
			{
				title: 'General',
                path: '/form/general',
                completed: false
			},
			{
				title: 'Location',
                path: '/form/location',
                completed: false
			},
			{
				title: 'Operations',
                path: '/form/operations',
                completed: false
            },
            {
                title: 'Description',
                path: '/form/description',
                completed: false
			},
			{
				title: 'Payroll',
                path: '/form/payroll',
                completed: false
			},
			{
				title: 'Review',
                path: '/form/review',
                completed: false
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
