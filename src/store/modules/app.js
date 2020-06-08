

'use strict';
import * as types from '../mutation-types'

const state = {
    count: 1
}

const mutations = {
    [types.ADD_FUN](state, temp) {
        state.count = state.count + temp
    },
    [types.REDUCTION_FUN](state, data) {
        state.count = state.count - data
    }
}

export default {
    state,
    mutations
}
