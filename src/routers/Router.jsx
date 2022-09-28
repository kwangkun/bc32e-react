import { Navigate, useRoutes } from "react-router-dom"
import AdminLayout from "../components/layouts/AdminLayout"
import MainLayout from "../components/layouts/MainLayout"
import About from "../pages/About"
import AdminProduct from "../pages/AdminProduct"
import AdminUser from "../pages/AdminUser"
import Contact from "../pages/Contact"
import Detail from "../pages/Detail"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

export const Router = () => {
    // const routing = useRoutes([
    //     {
    //         path: '/',
    //         element: <Navigate to={'/home'}/>,
    //     },

    //     {
    //         path: '/home',
    //         element: <Home />
    //     },

    //     {
    //         path: '/about',
    //         element: <About />
    //     },

    //     {
    //         path: '/contact',
    //         element: <Contact />
    //     },

    //     {
    //         path: '/detail',
    //         element: <Detail />
    //     },

    //     {
    //         path: '*',
    //         element: <NotFound />
    //     },
    // ])

    const routing = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Navigate to={'home'} />,
                },

                {
                    path: 'home',
                    element: <Home />
                },

                {
                    path: 'about',
                    element: <About />
                },

                {
                    path: 'contact',
                    element: <Contact />
                },

                {
                    path: 'detail/:abcdexyzlol',
                    element: <Detail />
                },

                {
                    path: '*',
                    element: <NotFound />
                },
            ]
        },

        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                {
                    path: 'user',
                    element: <AdminUser />
                },

                {
                    path: 'product',
                    element: <AdminProduct />
                },
            ]
        },
    ])

    return routing
}

export default Router