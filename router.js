export function CreateRouter() {
    let routes = [];

    const router = {
        addRoute(fragment, component) {
            routes.push({fragment, component});
            return this;
        },

        start() {
            window.addEventListener('click', (event) => {
                if (event.target.nodeName === 'A' && event.target.hasAttribute(
                    'href')) {
                    event.preventDefault();

                    const path = event.target.pathname;
                    window.history.pushState(null, null, path);
                    this.checkRoute();
                }
            });

            this.checkRoute();
            return this;
        },

        setNotFound(component) {
            routes.push({fragment: "*", component});
            return this;
        },

        checkRoute() {
            const currentRoute = routes.find(
                    (route) => route.fragment === window.location.pathname)
                || routes.find((route) => route.fragment === "*");

            currentRoute.component();
        },

    }

    return router
}