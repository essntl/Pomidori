import { Note } from "./NotesPanel";

interface NoteCardProps {
  note: Note;
  isSelected: boolean;
  onClick: () => void;
  onDelete: () => void;
}

function NoteCard({ note, isSelected, onClick, onDelete }: NoteCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-3 rounded-lg cursor-pointer transition-colors ${
        isSelected
          ? "bg-pink-200 dark:bg-pink-600"
          : "bg-white/70 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium dark:text-white truncate flex-1">
          {note.title || "Untitled"}
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="ml-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
        >
          ×
        </button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">
        {note.content || "No content"}
      </p>
    </div>
  );
}

export default NoteCard;
