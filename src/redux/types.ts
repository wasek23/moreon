/// Cart Types
export enum cartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CLEAR_CART = 'CLEAR_CART'
}

interface AddToCartType {
    type: cartActionTypes.ADD_TO_CART,
    payload: IProduct
}
interface RemoveFromCartType {
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: string
}
interface ClearCartType {
    type: cartActionTypes.CLEAR_CART
}
export type cartActionType = AddToCartType | RemoveFromCartType | ClearCartType;

// Auth Types
export enum authActionTypes {
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_PENDING = 'LOGIN_PENDING',
    LOGIN_FAIL = 'LOGIN_FAIL',
    LOGOUT = 'LOGOUT'
}

interface LoginSuccess {
    type: authActionTypes.LOGIN_SUCCESS,
    payload: IAuthUser
}
interface LoginPending {
    type: authActionTypes.LOGIN_PENDING
}
interface LoginFail {
    type: authActionTypes.LOGIN_FAIL,
    payload: string
}
interface Logout {
    type: authActionTypes.LOGOUT
}
export type authActionType = LoginSuccess | LoginPending | LoginFail | Logout;