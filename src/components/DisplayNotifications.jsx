import React from 'react';
import Notifs from './Notifications';
import NotifCardStyle from './NotifCardStyle';

function DisplayNotifications(){

    function dispNotif(d){
        return <NotifCardStyle key = {d.id} id = {d.id} text = {d.content}/>;
    }

    return (
        <div id = "displayNotifications">
        {Notifs.map(dispNotif)}
        </div>
    );
}

export default DisplayNotifications;
