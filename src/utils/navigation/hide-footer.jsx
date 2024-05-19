export default function hideFooter(location, routes) {
    const availablePaths = [
        '/',
        '/home',
        '/services',
        '/portfolio',
        '/about',
        '/contact',
    ]

    return routes.some(
        route =>
        route.path === location.pathname &&
        availablePaths.includes(route.path) 
    )
}

// Info in hide-top-navigation-bar.jsx component