import React, { createContext, useContext, useState, ReactNode } from "react";
import { useLocation, Location } from "react-router-dom";

// Create Context
const NotesVisibilityContext = createContext<{
    notesVisible: boolean;
    developerNotesVisible: boolean;
    toggleNotes: () => void;
}>({
    notesVisible: true,
    developerNotesVisible: false,
    toggleNotes: () => {},
});

// Provider Component
export const NotesVisibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [notesVisible, setNotesVisible] = useState(true);

    // Safely check if useLocation can be called
    let location: Location | undefined;
    try {
        location = useLocation();
    } catch (error) {
        console.warn(
            "useLocation was called outside of a Router context. Ensure that NotesVisibilityProvider is wrapped inside a <BrowserRouter>."
        );
        location = { pathname: "/", search: "", hash: "", state: null } as Location; // Default fallback location
    }

    const developerNotesVisible =
        notesVisible && new URLSearchParams(location.search).get("developer") === "true";

    const toggleNotes = () => {
        setNotesVisible((prev) => !prev);
    };

    return (
        <NotesVisibilityContext.Provider value={{ notesVisible, developerNotesVisible, toggleNotes }}>
            {children}
        </NotesVisibilityContext.Provider>
    );
};

// Custom Hook
export function useNotesVisibility() {
    return useContext(NotesVisibilityContext);
}