import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ isAllowed, redirectPath = '/', children }) => {
    const location = useLocation();
    console.log(location)
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace state={location.pathname} />;
    }

    return children ? children : <Outlet />;
};