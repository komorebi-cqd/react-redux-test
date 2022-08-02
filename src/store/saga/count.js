import {takeEvery,delay,put} from 'redux-saga/effects'
import { asyncDecrease,asyncIncrease,increase,decrease } from '../action/counter'

function* asyncIncreaseSaga(){
    yield delay(2000);
    yield put(increase())
    console.log('触发了asyncIncrease'); 
} 

function* asyncDecreaseSaga(){
    yield delay(2000)
    yield put(decrease())
    console.log('触发了asyncDecrease');
}

export default function* task(){
    yield takeEvery(asyncDecrease,asyncDecreaseSaga);
    yield takeEvery(asyncIncrease,asyncIncreaseSaga);
    console.log('监听ASYNCDECREASE ASYNCINCREASE');
}