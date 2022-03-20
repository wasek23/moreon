import { authActionTypes, authActionType } from './../types';

interface IAuthState {
    data: IAuthUser | null,
    state: 'idle' | 'pending' | 'success' | 'error',
    error: string | null
}
const initialState: IAuthState = {
    data: null,
    state: 'idle',
    error: null
}

const authReducer = (state: IAuthState = initialState, action: authActionType): IAuthState => { // !! action type
    switch (action.type) {
        case authActionTypes.LOGIN_SUCCESS:
            return {
                data: action.payload,
                state: 'success',
                error: null
            };
        case authActionTypes.LOGIN_PENDING:
            return {
                data: null,
                state: 'pending',
                error: null
            };
        case authActionTypes.LOGIN_FAIL:
            return {
                data: null,
                state: 'error',
                error: action.payload
            };
        case authActionTypes.LOGOUT:
            return initialState;
        default:
            return state;
    }
}
export default authReducer;