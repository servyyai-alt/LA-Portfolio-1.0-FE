const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();

export function getApiBaseUrl() {
    if (configuredBaseUrl) {
        return configuredBaseUrl.replace(/\/$/, "");
    }

    if (import.meta.env.DEV) {
        return "http://localhost:5000";
    }

    return "";
}

export function getApiUrl(path) {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${getApiBaseUrl()}${normalizedPath}`;
}
