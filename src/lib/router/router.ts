export class CreateRouter {
    private routes: {
        fragment: string;
        regex: RegExp;
        component: any;
        params: string[];
    }[];
    private notFoundRoute: { fragment: string; component: any } | null;

    constructor() {
        this.routes = [];
        this.notFoundRoute = null;
    }

    public addRoute(fragment: string, component: any): CreateRouter {
        const params = fragment.match(/:\w+/g)?.map((param) => param.slice(1)) || [];
        const regexFragment = fragment.replace(/:\w+/g, '([^\\/]+)');
        const regex = new RegExp(`^${regexFragment}\\/?$`);
        this.routes.push({ fragment, regex, component, params });
        return this;
    }

    public setNotFound(component: any): CreateRouter {
        this.notFoundRoute = { fragment: '*', component };
        return this;
    }

    private navigate(pathname: string): CreateRouter {
        window.history.pushState(null, '', pathname);
        this.checkRoute();
        return this;
    }

    private routeParams(currentRoute: any, pathName: string) {
        const matches = pathName.match(currentRoute.regex);

        matches!.shift();

        const params: { [key: string]: string } = {};
        matches!.forEach((paramValue, index) => {
            const paramName = currentRoute.params[index];
            params[paramName] = paramValue;
        });

        return params;
    }

    private checkRoute() {
        const path = window.location.pathname;
        let currentRoute: any = this.routes.find((route) => route.regex.test(path));

        if (!currentRoute) {
            currentRoute = this.notFoundRoute;
        }

        const urlParams = this.routeParams(currentRoute, path);
        currentRoute.component(urlParams);
    }

    public start() {
        window.addEventListener('click', (e: MouseEvent) => {
            const target = (e.target as HTMLAnchorElement).closest('a');

            if (target instanceof HTMLAnchorElement) {
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
