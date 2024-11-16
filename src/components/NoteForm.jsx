import { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';

export default function NoteForm({ 
  isOpen,      // Controls modal visibility
  onClose,     // Function to close modal
  onSubmit,    // Function to handle form submission
  initialNote  // Note data for editing (null for create mode)
}) {
  // Form State
  const [title, setTitle] = useState('');       // Note title
  const [content, setContent] = useState('');   // Note content
  const [error, setError] = useState('');       // Validation error message

  // Effect: Reset form when modal closes
  // This ensures the form is clean when reopened
  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setContent('');
      setError('');
    }
  }, [isOpen]);

  // Effect: Populate form when editing existing note
  // This fills the form with note data when editing
  useEffect(() => {
    if (initialNote) {
      setTitle(initialNote.title);
      setContent(initialNote.content);
    }
  }, [initialNote]);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      return;
    }

    // Create note object with trimmed values
    const note = {
      id: initialNote?.id || '', // Keep ID if editing
      title: title.trim(),
      content: content.trim(),
    };

    onSubmit(note); // Submit to parent component
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={initialNote ? 'Edit Note' : 'Create Note'}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title..."
        />

        {/* Content Input */}
        <TextArea
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
        />

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {/* Form Actions */}
        <div className="flex justify-end gap-2">
          <Button 
            type="button" 
            variant="secondary" 
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button type="submit">
            {initialNote ? 'Update' : 'Create'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}