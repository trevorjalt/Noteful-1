import React from 'react';
export default function NoteList(props) {
    return (
        <div>
        {props.notes.map(note => (
            <div className="App-notes" key={note.id}>
                <p>{note.modified}</p>
                <button name="delete" type="click">Delete</button>
            </div>
        ))}
        <button name="add-note"type="click">Add Note</button>
        </div>
    )
}