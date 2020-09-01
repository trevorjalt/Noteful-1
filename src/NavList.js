import React from 'react'

export default function NavList(props) {
    return (
        props.folders.map(folder =>
            <div className="App-folders">{folder.name}</div>
        )
    )
}