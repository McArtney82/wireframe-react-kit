import React, { createContext, useContext, useState, ReactNode } from "react";

const NotesVisibilityContext = createContext<{
    notesVisible: boolean;
    developerNotesVisible: boolean;
    toggleNotes: () => void;
}>({
    notesVisible: true,
    developerNotesVisible: false,
    toggleNotes: () => {},
});

export const NotesVisibilityProvider: React.FC<{ children: ReactNode; location: Location }> = ({
                                                                                                   children,
                                                                                                   location,
                                                                                               }) => {
    const [notesVisible, setNotesVisible] = useState(true);

    // Developer notes are visible only if the URL contains `?developer=true` AND `notesVisible` is true
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
