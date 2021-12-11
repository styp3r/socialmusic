import React from 'react';

function TopListItem(props){

    let unique = props.id;

    function handleClick(){
        //open new page with the corresponding user's details
        document.getElementById(unique).style.backgroundColor = "red";
    }

    return (
    <div id = {props.id} className = "topListItem" onClick = {handleClick}>
        <div className = "profilePicture"></div>
        <p className = "username">{props.username}</p>
        <i id = "listenersIcon" class="fas fa-user"> 367</i>
    </div>);
}

export default TopListItem;