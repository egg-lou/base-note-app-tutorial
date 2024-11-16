import NoteCard from './NoteCard';

export default function NoteList({ 
  notes,    // Array of notes to display
  onEdit,   // Function to handle note editing
  onDelete  // Function to handle note deletion
}) {
  // Show message when no notes exist
  if (notes.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p className="font-handwriting text-xl">
          No notes yet. Create your first note!
        </p>
      </div>
    );
  }

  // Render grid of notes
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}