import React, { useState } from 'react';

function Todo({ todo, onEdit, onDelete }) {
  const [editText, setEditText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditInputChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditStart = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditText('');
  };

  const handleEditSave = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText);
      setIsEditing(false);
      setEditText('');
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={handleEditInputChange}
          />
          <button onClick={handleEditSave}>Save</button>
          <button onClick={handleEditCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEditStart}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default Todo;
