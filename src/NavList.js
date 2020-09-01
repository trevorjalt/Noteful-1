import React from 'react'
import { Link } from 'react-router-dom';


export default function NavList(props) {
    console.log(props)
    
    if (props.location.pathname === '/' || props.location.pathname.startsWith('/folder')) {
        return (
            <div>
            {props.folders.map(folder =>(
                <div className="App-folders"
                 key={folder.id}>
                     <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
                     </div>
            ))}
            <button name="add-folder" type="click">Add Folder</button>
            </div>
        )
    } else {
        const note = props.notes.find(note => note.id === props.match.params.noteId)
        const folder = props.folders.find(folder => folder.id === note.folderId) || {}
        return (
            <div>
                <button onClick={() => props.history.goBack()} className="go-back">Go Back</button>
                <p>{folder.name}</p>
            </div>
        )
    }
    
}