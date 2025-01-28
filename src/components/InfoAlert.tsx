import { useNotesVisibility } from "../context/NotesVisibilityContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJira } from "@fortawesome/free-brands-svg-icons";
import { faFileWord } from "@fortawesome/free-solid-svg-icons";
import { InformationCircleIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

interface InfoAlertProps {
    title?: string;
    message: string;
    type?: "note" | "question" | "developer";
    docLinks?: string[]; // Allow multiple doc links
    jiraLinks?: string[]; // Allow multiple Jira links
    verticalMargin?: number; // Optional vertical margin
}

export default function InfoAlert({
                                      title = "Note",
                                      message,
                                      type = "note",
                                      docLinks = [], // Default to an empty array
                                      jiraLinks = [], // Default to an empty array
                                      verticalMargin = 4, // Default vertical margin
                                  }: InfoAlertProps) {
    const { notesVisible, developerNotesVisible } = useNotesVisibility();

    if (!notesVisible && type !== "developer") return null;
    if (type === "developer" && !developerNotesVisible) return null;

    const Icon = type === "question" ? QuestionMarkCircleIcon : InformationCircleIcon; // Default to InformationCircleIcon

    return (
        <div
            className={`flex items-start ${
                type === "developer"
                    ? "bg-gray-200 border-gray-400 text-gray-700"
                    : "bg-blue-100 border-blue-400 text-blue-700"
            } px-4 py-3 rounded relative my-${verticalMargin}`} // Vertical margin
            role="alert"
        >
            <Icon className="w-6 h-6 mr-2" />
            <div>
                {title && <strong className="font-bold">{title}: </strong>}
                <span>{message}</span>
                <div className="flex space-x-4 mt-2 flex-wrap">
                    {/* Render multiple Google Doc links */}
                    {docLinks.map((docLink, index) => (
                        <a
                            key={index}
                            href={docLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-500 hover:underline"
                        >
                            <FontAwesomeIcon icon={faFileWord} className="w-5 h-5 mr-1" />
                            Google Doc {index + 1}
                        </a>
                    ))}
                    {/* Render multiple Jira links */}
                    {jiraLinks.map((jiraLink, index) => (
                        <a
                            key={index}
                            href={jiraLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-500 hover:underline"
                        >
                            <FontAwesomeIcon icon={faJira} className="w-5 h-5 mr-1" />
                            Jira Task {index + 1}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
