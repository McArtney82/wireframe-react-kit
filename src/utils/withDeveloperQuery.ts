export function usePreserveDeveloperQuery(location: Location) {
    return (path: string) => {
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.get("developer") === "true") {
            return `${path}?${searchParams.toString()}`;
        }
        return path;
    };
}
