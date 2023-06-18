import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";

const App = () =>{
    return(
        <div className="tc"> 
            <h1>ROBOT FRIENDS</h1>
            <CardList robots={robots} />
        </div>
    );
}

export default App;