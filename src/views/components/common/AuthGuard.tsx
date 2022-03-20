import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AppState } from 'redux/store';

const AuthGuard = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();

    const authenticatedUser = useSelector((state: AppState) => state.auth);
    console.log(authenticatedUser);


    if (!true) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
}
export default AuthGuard;