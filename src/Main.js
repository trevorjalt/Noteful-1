import React from 'react';
import NavList from './NavList';
import NoteList from './NoteList';

function Main(props) {
    return (
        <>
            <NavList 
                folders={props.folders}
                {...props}
            />
            <NoteList 
                notes={props.notes}
                {...props}
            />
        </>


    )
}

export default Main



