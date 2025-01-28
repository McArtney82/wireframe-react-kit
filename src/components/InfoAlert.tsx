import { useNotesVisibility } from "../context/NotesVisibilityContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJira } from "@fortawesome/free-brands-svg-icons";
import { faFileWord } from "@fortawesome/free-solid-svg-icons";
import { InformationCircleIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

interface InfoAlertProps {
    title?: string;
    message: string;
    type?: "note" | "question" | "developer";
    docLink?: string;
    jiraLink?: string;
    verticalMargin?: number; // Add optional verticalMargin prop
}

export default function InfoAlert({
                                      title = "Note",
                                      message,
                                      type = "note",
                                      docLink,
                                      jiraLink,
                                      verticalMargin = 4, // Default value for verticalMargin
                                  }: InfoAlertProps) {
    const { notesVisible, developerNotesVisible } = useNotesVisibility();

    if (!notesVisible && type !== "developer") return null;
    if (type === "developer" && !developerNotesVisible) return null;

    const Icon = type === "note" ? InformationCircleIcon : QuestionMarkCircleIcon;

    return (
        <div
            className={`flex items-start ${
                type === "developer"
                    ? "bg-gray-200 border-gray-400 text-gray-700"
                    : "bg-blue-100 border-blue-400 text-blue-700"
            } px-4 py-3 rounded relative my-4`} // Add dynamic vertical margin
            role="alert"
        >
            <Icon className="w-6 h-6 mr-2" />
            <div>
                {title && <strong className="font-bold">{title}: </strong>}
                <span>{message}</span>
                <div className="flex space-x-4 mt-2">
                    {docLink && (
                        <a
                            href={docLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-500 hover:underline"
                        >
                            <FontAwesomeIcon icon={faFileWord} className="w-5 h-5 mr-1" />
                            Google Doc
                        </a>
                    )}
                    {jiraLink && (
                        <a
                            href={jiraLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-500 hover:underline"
                        >
                            <FontAwesomeIcon icon={faJira} className="w-5 h-5 mr-1" />
                            Jira Task
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
