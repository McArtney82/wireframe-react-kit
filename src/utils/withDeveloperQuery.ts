import { useLocation } from "react-router-dom";

export function usePreserveDeveloperQuery() {
    const location = useLocation();

    return (path: string) => {
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.get("developer") === "true") {
            return `${path}?${searchParams.toString()}`;
        }
        return path;
    };
}