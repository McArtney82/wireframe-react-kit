import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';

declare function clsxMerge(...classes: Array<string | boolean | undefined>): string;

interface InfoAlertProps {
    title?: string;
    message: string;
    type?: "note" | "question" | "developer";
    docLinks?: string[];
    jiraLinks?: string[];
    verticalMargin?: number;
}
declare function InfoAlert({ title, message, type, docLinks, // Default to an empty array
jiraLinks, // Default to an empty array
verticalMargin, }: InfoAlertProps): react_jsx_runtime.JSX.Element | null;

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
