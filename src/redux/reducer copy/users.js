import { ADDUSER, DELETEUSER, UPDATEUSER, SETLOADING, SETUSER} from '../action/usersAction'

const initialState = {
    loading: false,
    datas: []
};

const usersReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ADDUSER:
            return {
                ...state,
                datas: [...state.datas,payload]
            };
        case DELETEUSER: 
            return {
                ...state,
                datas: state.datas.filter(it => it.id !== payload)
            };
        case UPDATEUSER:
            return {
                ...state,
                datas: state.datas.map(it => it.id === payload.id ? {...it,...payload} : it)
            };
        case SETLOADING:
            return {
                ...state,
                loading: payload
            };
        case SETUSER:
            return {
                ...state,
                datas: payload
            }
        default:
            return state;
    }
}  


export default usersReducer;