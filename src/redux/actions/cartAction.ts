import { cartActionTypes } from '../types';

export const addToCart = (payload: IProduct) => {
    return {
        type: cartActionTypes.ADD_TO_CART,
        payload
    };
}
export const removeFromCart = (id: string) => {
    return {
        type: cartActionTypes.REMOVE_FROM_CART,
        payload: id
    };
}
export const clearCart = () => {
    return {
        type: cartActionTypes.CLEAR_CART
    };
}