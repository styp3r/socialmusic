import React from 'react';

function NotificationTray(){

    function handleCloseNotifTray(){
        document.getElementById("notifTray").className = "notifTrayDisappear";
        document.getElementById("content").className = "";
    }


    return (
        <div id = "notifTray">
            <button id = "closeNotifTray" onClick = {handleCloseNotifTray}>Close</button>
        </div>
    );
}

export default NotificationTray;