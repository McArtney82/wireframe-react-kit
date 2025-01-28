export function usePreserveDeveloperQuery(location: { search: string }) {
    return (path: string) => {
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.get("developer") === "true") {
            return `${path}?${searchParams.toString()}`;
        }
        return path;
    };
}
