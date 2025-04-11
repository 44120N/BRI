export function flattenRoutesWithChildren(routes, base = '') {
    return routes.flatMap(route => {
        const fullPath = `${base}/${route.path || ''}`.replace(/\/+/g, '/');
        const children = route.children ? flattenRoutesWithChildren(route.children, fullPath) : [];
        return [{ ...route, fullPath, basePath: base }, ...children];
    });
}

export function findParentRoute(pathname, routes) {
    const flat = flattenRoutesWithChildren(routes);
    return flat.find(route => {
        if (!route.children) return false;
        return route.children.some(child =>
            pathname.startsWith(`${route.fullPath}/${child.path}`)
        );
    }) || null;
}
