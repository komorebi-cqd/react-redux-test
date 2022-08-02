import { all } from 'redux-saga/effects'
import count from './count'

export default function* rootSaga(){
    yield all([count()]);
}

