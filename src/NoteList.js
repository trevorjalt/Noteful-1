import React from 'react';
export default function NoteList(props) {
    console.log(props)

    let filteredNotes = props.notes.filter(note => {
        return note.folderId === props.match.params.folderId
    })  
    
    const mapper = (note) => (
        <div className="App-notes" key={note.id}>
        <p>{note.name}</p>
        <p>{note.modified}</p>
        <button name="delete" type="click">Delete</button>
    </div>
    )
    
    return (
        <div>
            {(filteredNotes.length) ? filteredNotes.map(mapper) : props.notes.map(mapper)}
            
            <button name="add-note"type="click">Add Note</button>
        </div>
    )
}