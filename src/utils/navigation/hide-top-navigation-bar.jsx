export default function hideTopNavBar(location, routes) {
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

// Render the TopNavBar component when in the given paths (a.k.a. in availablePaths)