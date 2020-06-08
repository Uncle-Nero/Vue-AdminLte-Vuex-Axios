

'use strict';

import * as types from './mutation-types'

export const add_fun = ({ commit }, temp) => commit(types.ADD_FUN, temp)
export const reduction_Fun = ({ commit }, data) => commit(types.REDUCTION_FUN, data)