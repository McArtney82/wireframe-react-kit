import React, { ReactNode } from 'react';

declare function clsxMerge(...classes: Array<string | boolean | undefined>): string;

declare const NotesVisibilityProvider: React.FC<{
    children: ReactNode;
}>;
declare function useNotesVisibility(): {
    notesVisible: boolean;
    developerNotesVisible: boolean;
    toggleNotes: () => void;
};

export { NotesVisibilityProvider, clsxMerge, useNotesVisibility };
