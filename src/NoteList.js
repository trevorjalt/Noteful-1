import React from 'react';
export default function NoteList(props) {
    console.log(props)
    
    let generatedList = [];
    let filteredNote = props.notes.filter(note => {
        return note.folderId === props.match.params.folderId
    })
    if (props.match.params.folderId) {
        generatedList = filteredNote.map(note => (
            <div className="App-notes" key={note.id}>
                <p>{note.modified}</p>
                <button name="delete" type="click">Delete</button>
            </div>
        )) }
        else {
        generatedList =
        props.notes.map(note => (
            <div className="App-notes" key={note.id}>
                <p>{note.modified}</p>
                <button name="delete" type="click">Delete</button>
            </div>
        )) }
    console.log(generatedList)
    
    
    
    return (
        <div>
            {generatedList}
            
            <button name="add-note"type="click">Add Note</button>
        </div>
    )
}