import { Pencil, Trash } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function NoteCard({ 
  note,     // Note data to display
  onEdit,   // Function to handle edit action
  onDelete  // Function to handle delete action
}) {
  // Helper function to format dates in a readable way
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card className="flex flex-col h-full">
      {/* Card Header with Title and Actions */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-handwriting font-bold">
          {note.title}
        </h3>
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            variant="secondary" 
            onClick={() => onEdit(note)}
            className="p-2"
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button 
            variant="danger" 
            onClick={() => onDelete(note.id)}
            className="p-2"
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Note Content */}
      <p className="flex-grow font-handwriting mb-4">
        {note.content}
      </p>
      
      {/* Timestamp */}
      <div className="text-sm text-gray-500">
        <time>Last updated: {formatDate(note.updatedAt)}</time>
      </div>
    </Card>
  );
}