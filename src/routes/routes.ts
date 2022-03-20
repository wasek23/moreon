import React from 'react';
import store from 'redux/store';
import Secret from 'views/pages/Admin/Secret';

const Login = React.lazy(() => import('views/pages/Auth/Login'));
const Home = React.lazy(() => import('views/pages/Home/Home'));
const SingleProduct = React.lazy(() => import('views/pages/Single/SingleProduct'));
const AdminDashboard = React.lazy(() => import('views/pages/dashboards/AdminDashboard'));
const MerchantDashboard = React.lazy(() => import('views/pages/dashboards/MerchantDashboard'));

const { auth } = store.getState();
console.log(auth);

const dashboardByRole = (role: string = 'visitor') => {
    switch (role) {
        case 'admin':
            return AdminDashboard;
        case 'merchant':
            return MerchantDashboard;
        default:
            return null;
    }
}

export const routes = [
    {
        path: '/',
        element: Home,
        name: 'Home',
        roles: ['*']
    },
    {
        path: '/login',
        element: Login,
        name: 'Login',
        roles: ['*']
    },
    {
        path: '/product/:id',
        element: SingleProduct,
        name: 'Product Details',
        roles: ['*']
    },
    {
        path: '/dashboard',
        element: dashboardByRole(auth.data?.role),
        name: 'Dashboard',
        roles: ['admin', 'merchant']
    },
    {
        path: '/admin',
        element: Secret,
        name: 'For Admin Only',
        roles: ['admin']
    }
]