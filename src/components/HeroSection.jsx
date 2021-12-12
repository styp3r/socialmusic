import React from 'react';
import Popular from './Popular';
import GoLive from './GoLive';

function HeroSection(){
    return(
        <div id = "heroSection">
            <Popular />
            <GoLive />
        </div>
    );
}

export default HeroSection;