import { useNotesVisibility } from "../context/NotesVisibilityContext";

export default function NotesToggle() {
    const { notesVisible, toggleNotes } = useNotesVisibility();

    return (
        <div className="fixed top-4 right-4">
            <button
                onClick={toggleNotes}
                className="px-4 py-2 bg-gray-800 text-white rounded shadow hover:bg-gray-700"
            >
                {notesVisible ? "Hide Notes" : "Show Notes"}
            </button>
        </div>
    );
}