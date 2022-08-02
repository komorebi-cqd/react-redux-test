import store from './index'
import {increase,decrease,asyncDecrease,asyncIncrease } from './action/counter';


window.increase = function(){
    store.dispatch(increase())
}

window.decrease = function(){
    store.dispatch(decrease())
}

window.asyncDecrease = function(){
    store.dispatch(asyncDecrease())
}

window.asyncIncrease = function(){
    store.dispatch(asyncIncrease())
}