import React, { createContext, useContext, useState, ReactNode } from "react";

const NotesVisibilityContext = createContext({
    notesVisible: true,
    developerNotesVisible: false,
    toggleNotes: () => {},
});

export const NotesVisibilityProvider: React.FC<{ children: ReactNode; location: { search: string } }> = ({
                                                                                                             children,
                                                                                                             location,
                                                                                                         }) => {
    const [notesVisible, setNotesVisible] = useState(true);

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

export const useNotesVisibility = () => useContext(NotesVisibilityContext);
