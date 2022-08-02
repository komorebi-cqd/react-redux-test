import { getAllStudent } from '../../api/index'

export const ADDUSER = 'add-user';
export const DELETEUSER = 'delete-user'
export const UPDATEUSER = 'update-user'
export const SETUSER = 'set-user'
export const SETLOADING = 'set-loading'


export const createAddUserActions = (user) => ({
    type: ADDUSER,
    payload: user
})

export const createDeleteUserAction = (id) => ({
    type:DELETEUSER,
    payload: id
})

export const createUpdateUserAction = (id,newUser) => ({
    type:UPDATEUSER,
    payload:{
        ...newUser,
        id
    }
})

export const createSetLoadingAction = (isLoading) => ({
    type: SETLOADING,
    payload: isLoading 
})

export const createSetUserAction = (users) => ({
    type: SETUSER,
    payload: users
})


export function fetcUsers(){
    console.log(222);
    return async function(dispatch){
        dispatch(createSetLoadingAction(true));
        const user = await getAllStudent();
        const action = createSetUserAction(user);
        dispatch(action);
        dispatch(createSetLoadingAction(false));
    }
}

