import { combineReducers, createStore } from 'redux'
// import { baiTapXe, demoRedux } from './reducers'
import * as reducers from './reducers'

const rootReducers = combineReducers({
    // demoRedux,
    // baiTapXe,
    ...reducers,
})

export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())