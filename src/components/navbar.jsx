import React from 'react';

function Navbar({ setSelectedBook }){
    return (
        <>
        <div className = "navbar">
            <span onClick = {() => setSelectedBook('PL')} role = "button" aria-label = "Polish">
                🇵🇱
            </span>
            <span onClick = {() => setSelectedBook('EN')} role = "button" aria-label = "English">
                🇬🇧
            </span>
        </div>
        </>
    )
}

export default Navbar;

