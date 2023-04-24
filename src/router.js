export class CreateRouter {
    constructor() {
        this.routes = [];
        this.notFoundRoute = null;
    }

    addRoute(fragment, component) {
        const params =
            fragment.match(/:\w+/g)?.map((param) => param.slice(1)) || [];
        const regexFragment = fragment.replace(/:\w+/g, '([^\\/]+)');
        const regex = new RegExp(`^${regexFragment}\\/?$`);
        this.routes.push({ fragment, regex, component, params });
        return this;
    }

    setNotFound(component) {
        this.notFoundRoute = { fragment: '*', component };
        return this;
    }

    navigate(pathname) {
        window.history.pushState(null, null, pathname);
        this.checkRoute();
        return this;
    }

    routeParams(currentRoute, pathName) {
        const matches = pathName.match(currentRoute.regex);

        matches.shift();

        const params = {};
        matches.forEach((paramValue, index) => {
            const paramName = currentRoute.params[index];
            params[paramName] = paramValue;
        });

        return params;
    }

    checkRoute() {
        const path = window.location.pathname;
        let currentRoute = this.routes.find((route) => route.regex.test(path));

        if (!currentRoute) {
            currentRoute = this.notFoundRoute;
        }

        const urlParams = this.routeParams(currentRoute, path);
        currentRoute.component(urlParams);
    }

    start() {
        window.addEventListener('click', (e) => {
            const target = e.target.closest('a');
            if (target) {
                e.preventDefault();
                this.navigate(target.href);
            }
        });

        window.addEventListener('popstate', () => {
            this.checkRoute();
        });

        this.checkRoute();
    }
}
