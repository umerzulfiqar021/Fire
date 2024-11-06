const initialState = {
    isSignedIn : false,
    userName : 'Umer-Zulfiqar'
}


export default (state= initialState, {type,payload}) => {

    switch (type) {
        case 'Login':
            return {...state,isSignedIn: payload}
            break;
        case 'Logout': 
        return {...state, isSignedIn: payload}
        default:
            break;
    }

    return state
}