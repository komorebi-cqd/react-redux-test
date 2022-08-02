import { actionTypes } from "../action/count";

const initialState = 0;

export default function countReducer(state = initialState,{type}){
    switch (type) {
        case actionTypes.DECREASE:
            return state - 1;
        case actionTypes.INCREASE: 
            return state + 1;
        default:
            return state;
    }
}