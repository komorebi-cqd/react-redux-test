import { createStore,applyMiddleware } from 'redux'
import createSageMiddleware from 'redux-saga'
import logger from 'redux-logger'
import reducers from './reducer'
import rootSaga from './saga'

const sagaMiddleware = createSageMiddleware();

const store = createStore(reducers,applyMiddleware(sagaMiddleware,logger));

sagaMiddleware.run(rootSaga);

export default store;