import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    { route.element }
                </div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly
                    ? <RequireAuth>{element}</RequireAuth>
                    : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                { Object.values(routeConfig).map(renderWithWrapper) }
                {/* {routes.map(({ element, path }) => ( */}
                {/*    <Route */}
                {/*        key={path} */}
                {/*        path={path} */}
                {/*        element={( */}
                {/*            <div className="page-wrapper"> */}
                {/*                {element} */}
                {/*            </div> */}
                {/*        )} */}
                {/*    /> */}
                {/* ))} */}
            </Routes>
        </Suspense>
    );
};
export default memo(AppRouter);
