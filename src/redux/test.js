import store from './index'
import { increaseAction,decreaseAction,asyncDecreaseAction,asyncIncreaseAction } from './action/count';


window.increase = function(){
    store.dispatch(increaseAction())
}

window.decrease = function(){
    store.dispatch(decreaseAction())
}

window.asyncDecrease = function(){
    store.dispatch(asyncDecreaseAction())
}

window.asyncIncrease = function(){
    store.dispatch(asyncIncreaseAction())
}