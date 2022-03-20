import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import login from 'redux/actions/authAction';

import './Login.scss';

const Login = () => {
    const { handleSubmit, register } = useForm<ILoginData>();
    const dispatch = useDispatch();

    const onLogin = (data: ILoginData) => {
        dispatch(login(data));
    }

    return <div className="loginPage">
        <div className="container">
            <form className="loginForm" onSubmit={handleSubmit(onLogin)}>
                <input type="email" placeholder="Enter your email" {...register('email')} />
                <input type="password" placeholder="Enter your password" {...register('password')} />
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    </div>
}
export default Login;