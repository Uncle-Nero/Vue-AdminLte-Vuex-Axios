

'use strict';

import app from './modules/app'

const count = state => app.state.count
const getStateCount = state => app.state.count + 1

export {
    count,
    getStateCount
}