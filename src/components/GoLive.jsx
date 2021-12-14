import React, {useState} from 'react';

function GoLive(){

    const [priv, setPriv] = useState("Public");

    let privBtnIcon = <i className="fas fa-globe-americas"></i>;

    if(priv === "Public"){
        privBtnIcon = <i className="fas fa-globe-americas"></i>;
    } else {
        privBtnIcon = <i className="fas fa-lock"></i>;
    }

    function handlePrivacyClick(){
        document.getElementById("privacy-options").style.display = "block";
        document.getElementById("privacy-options").className = "dropdown-privacy";
    }

    function handlePublicClick(){
        setPriv("Public");
        document.getElementById("privacy-options").style.display = "none";
        document.getElementById("privacy-options").className = "";
    }

    function handlePrivateClick(){
        setPriv("Private");
        document.getElementById("privacy-options").style.display = "none";
        document.getElementById("privacy-options").className = "";
    }

    return (
        <div id = "goLive">
                <div id = "goLiveOptions">
                    <h3 className = "goLiveHeader">Go Live</h3>
                    <input id = "stream-title" placeholder = "Give your stream a title"/>

                    <div id = "privacy-settings">
                        <button className = "privacy-btn" onClick = {handlePrivacyClick}>{privBtnIcon} {priv}</button>
                        <div id = "privacy-options">
                            <p className = "public-opt" onClick = {handlePublicClick}><i className="fas fa-globe-americas"></i> Public</p>
                            <hr id = "opt-divide"/>
                            <p className = "private-opt" onClick = {handlePrivateClick}><i className="fas fa-lock"></i> Private</p>
                        </div>
                    </div>

                    <p className = "stream-music-title">Play some music to start streaming</p>
                    <button id = "start-stream-btn">Start</button>
                </div>
            </div>
    );
}

export default GoLive;