import React from 'react'
import { Link } from 'react-router-dom';
export default function NavList(props) {
    console.log(props)
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
}