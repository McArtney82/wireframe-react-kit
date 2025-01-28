import { useLocation, Location } from "react-router-dom";

export function usePreserveDeveloperQuery() {
    let location: Location;

    try {
        // Attempt to get the location from useLocation()
        location = useLocation();
    } catch (error) {
        // Fallback if called outside a Router context
        console.warn(
            "useLocation was called outside of a Router context. Ensure that components using usePreserveDeveloperQuery are wrapped inside a <BrowserRouter>."
        );
        location = { pathname: "/", search: "", hash: "", state: null } as Location; // Default fallback location
    }

    return (path: string) => {
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.get("developer") === "true") {
            return `${path}?${searchParams.toString()}`;
        }
        return path;
    };
}
