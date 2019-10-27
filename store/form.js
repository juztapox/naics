import { make } from 'vuex-pathify'
import { Stream } from 'stream'

function state() {
	return {
		business_name: '',
		business_entity: '',
		fein: '',
		ssn: '',
		state_date: '',
		address: '',
		mailing_address_same: '',
		additional_locations: [],
		phone: '',
		fax: '',
		email: '',
		website: '',
		naics_codes: [],
		suggestions: [],
		description_operations: '',
		operations: [
            {code: null, description: 'Clerical', employees: 0, payroll: 0}
        ]
	}
}

const mutations = {
	// create SET_VALUE automatically
	...make.mutations(state),

	// add manual mutation
	ADD_CODE(state, payload) {
		state.naics_codes.push(payload)
		state.suggestions = state.suggestions.filter(
			code => code.title != payload.title
		)
	},
	REMOVE_CODE(state, payload) {
		state.naics_codes = state.naics_codes.filter(
			code => code.code != payload.code
		)
	},
	SET_SUGGESTIONS(state, payload) {
		for (let index = 0; index < payload.length; index++) {
            const code = payload[index]
            let suggestion_exists = state.suggestions.find(c => c.title == code.title)
            let code_exists = state.naics_codes.find(c => c.title == code.title)
            if(!suggestion_exists && !code_exists){
                state.suggestions.push(code)
            }
		}
    },
    REMOVE_SUGGESTIONS_BY_REF_CODE(state, code){
        state.suggestions = state.suggestions.filter(suggestion=>suggestion.ref_code != code)
    },
    UPDATE_OPERATIONS(state, payload){
        let set = new Set([...payload, ...state.operations])
        state.operations = Array.from(set)
    },
    REMOVE_OPERATION(state, payload){
        state.operations = state.operations.filter(op=> op.code != payload.code)
    }
}

const actions = {
	getSuggestions(context, code) {
		let root = code.toString().substring(0, 3)
		this.$axios
			.get(`/below?query=${root}`)
			.then(res => {
				res = res.data.map(suggestion => {
                    let ref_code = code;
					return { code: suggestion.code, title: suggestion.title, ref_code }
				})
				context.commit('SET_SUGGESTIONS', res)
			})
    },
    getWCC({state, commit}){
        let payload = {
            naics_codes: state.naics_codes.map(code=>code.code),
            desc_text: state.description_operations
        };
		return this.$axios
			.post(`/wcc`, payload)
			.then(res => {
                commit('UPDATE_OPERATIONS', res.data)
			})
    }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
