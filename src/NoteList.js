import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

export default function NoteList(props) {
    console.log(props)


    let filteredNotes = props.notes.filter(note => {
        return note.folderId === props.match.params.folderId
    })  
    
    const mapper = (note) => (
        <div className="App-notes" key={note.id}>
        <p><Link to={`/note/${note.id}`}>{note.name}</Link></p>
        <p>{moment(note.modified).format('MMMM / DD / YYYY')}</p>
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