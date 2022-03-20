import { cartActionTypes, cartActionType } from '../types';

const cartReducer = (state: IProduct[] = [], action: cartActionType): IProduct[] => { // !! action type
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            return [...state, action.payload];
        case cartActionTypes.REMOVE_FROM_CART:
            return state.filter(item => item._id !== action.payload);
        case cartActionTypes.CLEAR_CART:
            return [];
        default:
            return state;
    }
}
export default cartReducer;