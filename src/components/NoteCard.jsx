/*
 * NoteCard.jsx - Individual Note Display Component
 * 
 * Implementation Steps:
 * 
 * 1. Set up Props:
 *    - note: { id, title, content, createdAt, updatedAt }
 *    - onEdit: (note) => void
 *    - onDelete: (noteId) => void
 * 
 * 2. Import Components:
 *    - Card from '../ui/Card'
 *    - Button from '../ui/Button'
 *    - Pencil, Trash from 'lucide-react'
 * 
 * 3. Render Structure:
 *    <Card>
 *      <div className="flex justify-between">
 *        <h3>{note.title}</h3>
 *        <div className="flex gap-2">
 *          <Button onClick={() => onEdit(note)}><Pencil /></Button>
 *          <Button onClick={() => onDelete(note.id)}><Trash /></Button>
 *        </div>
 *      </div>
 *      <p>{note.content}</p>
 *      <time>{format timestamp}</time>
 *    </Card>
 */

export default function NoteCard () {
    return (
        <h1>NoteCard to be implemented</h1>
    )
}