export const loginAction = () => {
    return{
        type:'Login',
        payload: true
    
    }
}
export const logoutAction = () => {
    return{
        type:'Logout',
        payload: false
    
    }
}
export const updateNameAction = (userName: string) => {
    return{
        type:'Change_Name',
        payload: userName
    
    }
}
export const OldAction = () => {
    return{
        type:'Old',
        
    
    }
}