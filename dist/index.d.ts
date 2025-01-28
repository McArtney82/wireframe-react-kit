import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';

declare function clsxMerge(...classes: Array<string | boolean | undefined>): string;

interface DashboardTileProps {
    title: string;
    colour: string;
    url: string;
}
declare function DashboardTile({ title, colour, url }: DashboardTileProps): react_jsx_runtime.JSX.Element;

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
}>;
declare function useNotesVisibility(): {
    notesVisible: boolean;
    developerNotesVisible: boolean;
    toggleNotes: () => void;
};

declare function NotesToggle(): react_jsx_runtime.JSX.Element;

export { DashboardTile, InfoAlert, NotesToggle, NotesVisibilityProvider, clsxMerge, useNotesVisibility };
