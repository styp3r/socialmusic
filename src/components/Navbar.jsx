import React from 'react';
import SearchBar from './SearchBar';

function Navbar(){

    function handleClick(){
        document.getElementById("notifTray").className = "notifTrayAppear";
        document.getElementById("content").className = "contentBlur";
    }


    return(
        <div id = "navbarContainer">
            <SearchBar />
            <i id = "bellIcon" class="far fa-bell" onClick = {handleClick}></i>
            <div id = "myProfileIcon"></div>
        </div>
    );
}

export default Navbar;