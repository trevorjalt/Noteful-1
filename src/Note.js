import React from 'react'


export default function Note(props) {
    const note = props.notes.find(note => note.id === props.match.params.noteId) || {}
    console.log(note)
    return (
      <div className="Note">
        <div>
        <h3>{note.name}</h3>
        <p>{note.modified}</p>
        </div>
        <button>Delete</button>
        <p>{note.content}</p>
      </div>  
    )
}