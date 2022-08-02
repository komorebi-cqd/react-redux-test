import { createStore,applyMiddleware } from 'redux'
import createSageMiddleware from 'redux-saga'
import logger from 'redux-logger'
import reducers from './action'
import rootSaga from './saga'
import history from './history'
import { routerMiddleware } from 'connected-react-router'
const routerMid = routerMiddleware(history)
const sagaMid = createSageMiddleware();

const store = createStore(reducers,applyMiddleware(routerMid,sagaMid,logger));

sagaMid.run(rootSaga);

export default store;