# Scribbly - React Notes App Tutorial

A beginner-friendly tutorial for building a note-taking app using React, Tailwind CSS, and Lucide React icons. This project demonstrates fundamental React concepts such as components, hooks, and state management.

## Features
- Create, view, edit, and delete notes
- Persistent storage using `localStorage`
- Handwriting-style theme for a unique user experience

## Tech Stack
- **Frontend Framework:** React
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Project Structure

### Components
1. **`NoteForm.jsx`**: Handles creating and editing notes
2. **`NoteCard.jsx`**: Displays individual notes with edit and delete actions
3. **`NoteList.jsx`**: Manages the list/grid of notes

### Utility Components
- **Provided UI Components:** Button, Input, TextArea, Card, Modal (found in `src/ui/`)

### Hooks
- **Custom Hook:** `useLocalStorage` for persistent storage

## Step-by-Step Implementation Guide

### 1. Core Components

#### **`NoteForm`** (`src/components/NoteForm.jsx`)
Handles creating and editing notes.
- **State:** Use `useState` to manage `title`, `content`, and `error` states
- **Features:**
  - Form validation
  - Submission handling with reset logic
  - Modal wrapping

#### **`NoteCard`** (`src/components/NoteCard.jsx`)
Displays individual notes with actions.
- **Features:**
  - Use `Card` component as a wrapper
  - Display note details: `title`, `content`, timestamps
  - Include edit and delete buttons with Lucide icons

#### **`NoteList`** (`src/components/NoteList.jsx`)
Manages the list/grid of notes.
- **Features:**
  - Render notes in a responsive grid
  - Handle empty state
  - Pass edit/delete handlers to `NoteCard`

### 2. Application Logic

#### App Component (`src/App.jsx`)
The main component where everything integrates.

1. **Global State Management:**

```
const [notes, setNotes] = useState([]);
const [isFormOpen, setIsFormOpen] = useState(false);
const [editingNote, setEditingNote] = useState(null);
```

2. **CRUD Operations:**
   - Add Note: Save new notes
   - Update Note: Edit existing notes
   - Delete Note: Remove notes from the list

3. **Modal Control:**
   - `openCreateForm`
   - `openEditForm`
   - `closeForm`

### 3. Persistent Storage

#### Custom Hook (`src/hooks/useLocalStorage.js`)
- Create a `useLocalStorage` hook to handle data persistence
- Replace `useState` with `useLocalStorage` in App.jsx for storing and retrieving notes

## Note Data Structure
Each note is represented as an object with the following structure:

```json
{
  "id": "string",       // Unique identifier
  "title": "string",    // Note title
  "content": "string",  // Note content
  "createdAt": "string",// Creation timestamp
  "updatedAt": "string" // Last update timestamp
}
```

## Learning Objectives

By completing this project, you will learn:

### React Basics
- Components, props, and state
- Event handling and form management

### Advanced React Concepts
- Hooks (useState, custom hooks)
- Local storage integration
- UI design with Tailwind CSS
- Component-based architecture and modular design
