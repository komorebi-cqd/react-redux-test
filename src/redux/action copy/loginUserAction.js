export const SETLOGINUSER = 'set-login-user';


export function createSetLoginUserAction(user){
    return {
        type: SETLOGINUSER,
        payload: user
    }
}

