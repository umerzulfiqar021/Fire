const initialState = {
    isSignedIn : false,
    userName : 'Umer-Zulfiqar',
    previousName: 'Umer-Zulfiqar'
}


export default (state= initialState, {type, payload}) => {

    switch (type) {
        case 'Login':
            return {...state,isSignedIn: payload}
            break;
        case 'Logout': 
        return {...state, isSignedIn: payload}
        break;
        case 'Change_Name':
            return{...state, userName : payload}
        
            break;
        case 'Old':
            return{...state, userName: state.previousName}
        default:
            break;
    }

    return state
}