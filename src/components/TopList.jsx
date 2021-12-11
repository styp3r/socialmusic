import React from 'react';
import TopListItem from './TopListItem';
import Users from './Users';

function TopList(){
    function displayList(d){
        return <TopListItem key = {d.id} id = {d.id} username = {d.name}/>;
    }

    return(<div id = "topListContainer">
    {Users.map(displayList)}
    </div>);
}

export default TopList;