import {takeEvery,delay,put} from 'redux-saga/effects'
import { actionTypes,increaseAction } from '../action/count'

function* asyncIncrease(){
    yield delay(2000);
    yield put(increaseAction())
    console.log('触发了asyncIncrease'); 
} 

function* asyncDecrease(){
    yield delay(2000)
    console.log('触发了asyncDecrease');
}

export default function* task(){
    yield takeEvery(actionTypes.ASYNCDECREASE,asyncDecrease);
    yield takeEvery(actionTypes.ASYNCINCREASE,asyncIncrease);
    console.log('监听ASYNCDECREASE ASYNCINCREASE');
}