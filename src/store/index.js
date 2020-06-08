import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    actions,
    getters,
    mutations: {
    },
    modules: {
        app
    },
})

export default store