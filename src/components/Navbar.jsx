import React from 'react';
import SearchBar from './SearchBar';

function Navbar(){
    return(
        <div id = "navbarContainer">
            <SearchBar />
            <i id = "bellIcon" class="far fa-bell"></i>
            <div id = "myProfileIcon"></div>
        </div>
    );
}

export default Navbar;