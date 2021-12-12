import React from 'react';

function StreamView(){

    function handleCloseStream(){
        document.getElementById("streamViewContainer").style.display = "none";
        document.getElementById("content").className = "";
    }

    return (
        <div id = "streamViewContainer">
        <div id = "streamWindow">
            <div id = "streamView">
                <button id = "closeStreamView" onClick = {handleCloseStream}>Close</button>
            </div>
            </div>
        </div>
    );
}

export default StreamView;