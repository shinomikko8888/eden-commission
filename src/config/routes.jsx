import { About, Contact, Home, Portfolio, Services } from "../pages"


const routes = [
    // Landing Pages
    {
        path: '/',
        component: <Home />,
        protected: false, // This is used for redirection if the user isn't logged in.
    },
    {
        path: '/home',
        component: <Home />,
        protected: false,
    },
    {
        path: '/services',
        component: <Services />,
        protected: false,
    },
    {
        path: '/portfolio',
        component: <Portfolio />,
        protected: false,
    },
    {
        path: '/about',
        component: <About />,
        protected: false,
    },
    {
        path: '/contact',
        component: <Contact />,
        protected: false,
    },
    
    // Add more for future routes, for pages with login info, set protected to true.

]

export default routes