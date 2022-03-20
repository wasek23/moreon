import { Dispatch } from 'redux';
import AuthService from 'services/Auth.Service';
import { authActionTypes, authActionType } from './../types';

export const login = (payload: ILoginData) => {
    return (dispatch: Dispatch<authActionType>) => {
        dispatch({
            type: authActionTypes.LOGIN_PENDING
        });

        AuthService.login(payload)
            .then((user: IAuthUser) => dispatch({
                type: authActionTypes.LOGIN_SUCCESS,
                payload: user
            }))
            .catch(err => dispatch({
                type: authActionTypes.LOGIN_FAIL,
                payload: err?.response?.data?.message
            }));
    }
}
export default login;