interface RoutesType {
  fragment: string;
  regex: RegExp;
  component: (params?: { [key: string]: string }) => void;
  params: string[];
}

interface NotFoundRoute extends RoutesType {
  fragment: string;
}

export class CreateRouter {
  routes: RoutesType[];
  notFoundRoute: NotFoundRoute | null;

  constructor() {
    this.routes = [];
    this.notFoundRoute = null;
  }

  public addRoute(fragment: string, component: (params?: { [key: string]: string }) => void): this {
    const params: string[] = fragment.match(/:\w+/g)?.map((param) => param.slice(1)) || [];
    const regexFragment: string = fragment.replace(/:\w+/g, "([^\\/]+)");
    const regex = new RegExp(`^${regexFragment}\\/?$`);
    this.routes.push({ fragment, regex, component, params });
    return this;
  }

  public setNotFound(component: (params?: { [key: string]: string }) => void): this {
    this.notFoundRoute = { fragment: "*", regex: /./, component, params: [] };
    return this;
  }

  private navigate(pathname: string): this {
    window.history.pushState(null, "", pathname);
    this.checkRoute();
    return this;
  }

  private routeParams(currentRoute: RoutesType, pathName: string): { [key: string]: string } | undefined {
    const matches = pathName.match(currentRoute.regex);

    if (matches) {
      matches.shift();

      const params: { [key: string]: string } = {};
      matches.forEach((paramValue, index) => {
        const paramName = currentRoute.params[index];
        params[paramName] = paramValue;
      });

      return params;
    }

    return undefined;
  }

  private checkRoute() {
    const path: string = window.location.pathname;
    let currentRoute = this.routes.find((route) => route.regex.test(path)) || this.notFoundRoute || { fragment: null };

    const urlParams = this.routeParams(currentRoute, path);
    if (currentRoute) {
      currentRoute.component(urlParams);
    }
  }

  public start(): void {
    window.addEventListener("click", (e: MouseEvent) => {
      const target: HTMLAnchorElement | null = (e.target as HTMLAnchorElement).closest("a");

      if (target instanceof HTMLAnchorElement) {
        e.preventDefault();
        this.navigate(target.href);
      }
    });

    window.addEventListener("popstate", () => {
      this.checkRoute();
    });

    this.checkRoute();
  }
}
