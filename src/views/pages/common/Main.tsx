import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { routes } from 'routes/routes';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';

const Main = () => {
    const authenticatedUser = useSelector((state: AppState) => state.auth?.data);

    const publicRoutes = routes.filter(route => route.roles.includes('*'));

    const privateRoutes = authenticatedUser?.role ? routes.filter(route => route.roles.includes(authenticatedUser?.role)) : [];

    const filteredRoutes = [...publicRoutes, ...privateRoutes]

    return <>
        <Header />

        <main>
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    {filteredRoutes.map((route, index) => {
                        return route.element && <Route key={index} path={route.path} element={<route.element />} />
                    })}
                </Routes>
            </Suspense>
        </main>

        <Footer />
    </>;
}
export default Main;