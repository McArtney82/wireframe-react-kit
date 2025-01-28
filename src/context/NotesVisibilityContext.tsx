import React, { createContext, useContext, useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";

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
    const location = useLocation();

    // Developer notes are visible only if the URL contains `?developer=true` AND `notesVisible` is true
    const developerNotesVisible = notesVisible && new URLSearchParams(location.search).get("developer") === "true";

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
