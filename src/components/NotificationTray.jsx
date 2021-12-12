import React from 'react';
import DisplayNotifications from './DisplayNotifications';

function NotificationTray(){

    function handleCloseNotifTray(){
        document.getElementById("notifTray").className = "notifTrayDisappear";
        document.getElementById("content").className = "";
    }


    return (
        <div id = "notifTray">
            <button id = "closeNotifTray" onClick = {handleCloseNotifTray}>Close</button>
            <DisplayNotifications />
        </div>
    );
}

export default NotificationTray;