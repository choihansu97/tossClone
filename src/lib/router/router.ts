export class CreateRouter {
    routes: { fragment: string; regex: RegExp; component: any; params: string[] }[]
    notFoundRoute: { fragment: string; component: any } | null

    constructor() {
        this.routes = [];
        this.notFoundRoute = null;
    }

    addRoute(fragment: string, component: any) {
        const params = fragment.match(/:\w+/g)?.map((param) => param.slice(1)) || [];
        const regexFragment = fragment.replace(/:\w+/g, '([^\\/]+)');
        const regex = new RegExp(`^${regexFragment}\\/?$`);
        this.routes.push({fragment, regex, component, params});
        return this;
    }

    setNotFound(component: any) {
        this.notFoundRoute = {fragment: '*', component};
        return this;
    }

    navigate(pathname: string) {
        window.history.pushState(null, '', pathname);
        this.checkRoute();
        return this;
    }

    routeParams(currentRoute: any, pathName: string) {
        const matches = pathName.match(currentRoute.regex);

        matches!.shift();

        const params: { [key: string]: string } = {};
        matches!.forEach((paramValue, index) => {
            const paramName = currentRoute.params[index];
            params[paramName] = paramValue;
        });

        return params;
    }

    checkRoute() {
        const path = window.location.pathname;
        let currentRoute: any = this.routes.find((route) => route.regex.test(path));

        if (!currentRoute) {
            currentRoute = this.notFoundRoute;
        }

        const urlParams = this.routeParams(currentRoute, path);
        currentRoute.component(urlParams);
    }

    start() {
        window.addEventListener('click', (e: MouseEvent) => {
            const target: HTMLAnchorElement | null = (e.target as HTMLAnchorElement).closest('a');
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