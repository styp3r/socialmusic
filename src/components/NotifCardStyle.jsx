import React from 'react';

function NotifCardStyle(props){
    return (
        <div id = {props.id} className = "cardStyle">{props.text}</div>
    );
}

export default NotifCardStyle;