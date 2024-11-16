import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Button from './ui/Button';
import { Plus } from 'lucide-react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // State Management
  // notes: Array of note objects that stores all our notes
  // isFormOpen: Controls the visibility of the modal form
  // editingNote: Stores the note being edited (null when creating new note)
  const [notes, setNotes] = useState([]);
  // TODO: Replace with useLocalStorage for persistence
  // const [notes, setNotes] = useLocalStorage('notes', []);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  // CRUD Operations
  // addNote: Creates a new note with timestamps and unique ID
  const addNote = (newNote) => {
    const note = {
      ...newNote,
      id: Date.now().toString(), // Create unique ID using timestamp
      createdAt: new Date().toISOString(), // Add creation timestamp
      updatedAt: new Date().toISOString() // Add update timestamp
    };
    setNotes([note, ...notes]); // Add new note to beginning of array
  };

  // deleteNote: Removes a note by filtering it out using its ID
  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  // updateNote: Updates an existing note while preserving its ID
  // and updating its timestamp
  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id 
        ? { ...updatedNote, updatedAt: new Date().toISOString() }
        : note
    ));
  };

  // Modal Control Functions
  // openCreateForm: Opens empty form for new note
  const openCreateForm = () => {
    setEditingNote(null); // Clear any editing note
    setIsFormOpen(true); // Show the modal
  };

  // openEditForm: Opens form with existing note data
  const openEditForm = (note) => {
    setEditingNote(note); // Set the note to be edited
    setIsFormOpen(true); // Show the modal
  };

  // closeForm: Resets form state and closes modal
  const closeForm = () => {
    setEditingNote(null); // Clear editing note
    setIsFormOpen(false); // Hide the modal
  };

  // handleSubmit: Unified handler for both create and edit operations
  const handleSubmit = (note) => {
    if (editingNote) {
      updateNote(note); // Update existing note
    } else {
      addNote(note); // Create new note
    }
    closeForm(); // Close the modal after operation
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col">
      {/* App Title */}
      <h1 className="text-4xl font-bold text-center mb-8 font-handwriting">
        Scribbly
      </h1>
      
      {/* Add Note Button */}
      <Button 
        onClick={openCreateForm}
        className="mb-4 self-end"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Note
      </Button>
      
      {/* Notes Grid */}
      <NoteList 
        notes={notes}
        onEdit={openEditForm}
        onDelete={deleteNote}
      />

      {/* Create/Edit Form Modal */}
      <NoteForm
        isOpen={isFormOpen}
        onClose={closeForm}
        onSubmit={handleSubmit}
        initialNote={editingNote}
      />
    </div>
  );
}

export default App;
