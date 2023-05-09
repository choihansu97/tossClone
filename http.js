const contentType = {
    json: "application/json",
    formData: "multipart/form-data"
};

export class HttpClient {
    baseUrl = "";
    baseParams = {
        headers: {}
    };

    constructor(config) {
        Object.assign(this, config);
    }

    contentFormatter(body, type) {
        switch (type) {
            case contentType.json:
                return JSON.stringify(body);
            case contentType.formData:
                const formData = new FormData();
                Object.entries(body).forEach(([key, value]) => {
                    formData.append(key, value);
                });
                return formData;
            default:
                return body;
        }
    }

    params(path, params) {
        const paramRegex = path.match(/:(\w+)/g);

        if (!paramRegex) {
            return path;
        }

        const pathParams = paramRegex.map((param) => param.slice(1));
        let newPath = path;

        pathParams.forEach((param) => {
            const value = params[param];

            if (value === undefined) {
                throw new Error(`Missing required param: ${param}`);
            }

            newPath = newPath.replace(`:${param}`, value);
        });

        return newPath;
    }

    request = async ({
        baseUrl = this.baseUrl,
        path,
        queryString,
        requestParams,
        type = contentType.json,
        body,
        method,
        signal
    }) => {
        let response = { data: null, error: null };
        const headers = { ...this.baseParams.headers, "Content-Type": type };
        const options = { headers, method, body: this.contentFormatter(body, type), signal };
        path = this.params(path, requestParams);
        queryString = typeof queryString === 'string' ? new URLSearchParams(queryString).toString() : "";

        try {
            const data = await fetch(
                `${baseUrl || this.baseUrl}${path}${queryString}`,
                options
            );
            response.data = await data.json();

            if (!data.ok) {
                throw new Error(`Failed to fetch ${path} : ${data.status}`);
            }
        } catch (error) {
            response.error = error;
        }

        return response;
    };

    async get(options) {
        options.method = "GET";
        return await this.request(options);
    }

    async post(options) {
        options.method = "POST";
        return await this.request(options);
    }

    async patch(options) {
        options.method = "PATCH";
        return await this.request(options);
    }

    async put(options) {
        options.method = "PUT";
        return await this.request(options);
    }

    async delete(options) {
        options.method = "DELETE";
        return await this.request(options);
    }
}