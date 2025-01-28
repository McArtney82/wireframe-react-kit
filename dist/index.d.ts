import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';

declare function clsxMerge(...classes: Array<string | boolean | undefined>): string;

interface InfoAlertProps {
    title?: string;
    message: string;
    type?: "note" | "question" | "developer";
    docLink?: string;
    jiraLink?: string;
}
declare function InfoAlert({ title, message, type, docLink, jiraLink }: InfoAlertProps): react_jsx_runtime.JSX.Element | null;

declare const NotesVisibilityProvider: React.FC<{
    children: ReactNode;
    location: {
        search: string;
    };
}>;
declare const useNotesVisibility: () => {
    notesVisible: boolean;
    developerNotesVisible: boolean;
    toggleNotes: () => void;
};

declare function NotesToggle(): react_jsx_runtime.JSX.Element;

declare function usePreserveDeveloperQuery(location: {
    search: string;
}): (path: string) => string;

export { InfoAlert, NotesToggle, NotesVisibilityProvider, clsxMerge, useNotesVisibility, usePreserveDeveloperQuery };
