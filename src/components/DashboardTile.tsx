import { Link } from "react-router-dom";
import { clsxMerge } from "../helpers/clsxMerge";

interface DashboardTileProps {
    title: string;
    colour: string;
    url: string;
}

export default function DashboardTile({ title, colour, url }: DashboardTileProps) {
    return (
        <Link
            to={url}
            className={clsxMerge(
                "w-64 h-64 flex items-center justify-center text-center mb-4",
                colour
            )}
        >
            <h1 className="text-white">{title}</h1>
        </Link>
    );
}
