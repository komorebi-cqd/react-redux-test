import {combineReducers} from 'redux'
import loginUser from "./loginUser";
import users from "./users";

// const reducer = (state = {},action) => {
//     const newState = {
//         loginUser: loginUser(state.loginUser,action),
//         users:users(state.users,action)
//     }
//     return newState;
// }

const reducer = combineReducers({
    users,
    loginUser
})

export default reducer;