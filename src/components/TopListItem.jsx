import React from 'react';

function TopListItem(props){

    function handleUserClick(){
        //open new page with the corresponding user's details
        //document.getElementById(props.id).style.backgroundColor = "red";
        document.getElementById("streamViewContainer").style.display = "block";
        document.getElementById("content").className = "contentBlur";
        document.getElementById("notifTray").className = "";
    }

    return (
    <div id = {props.id} className = "topListItem" onClick = {handleUserClick}>
        <div className = "profilePicture"></div>
        <p className = "username">{props.username}</p>
        <i id = "listenersIcon" className="fas fa-user"> 367</i>
    </div>);
}

export default TopListItem;