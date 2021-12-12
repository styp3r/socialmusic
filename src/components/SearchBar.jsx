import React from 'react';

function SearchBar(){

    return (
    <div id = "searchBar">
        <i id = "searchIcon" class="fas fa-search"></i>
        <input id = "searchInput" placeholder = "Search"/>
    </div>);
}

export default SearchBar;