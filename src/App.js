import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./Searchbox";

class App extends Component{

    constructor(){
        super()
        this.state = {
            robots : robots,
            searchfield : ""
        }
    }

    onchange(event){
        console.log(event);
    }

    render () {
        return(
            <div className="tc"> 
            <h1>ROBOT FRIENDS</h1>
            <SearchBox searchChange={this.onchange}/>
            <CardList robots={this.state.robots} />
            </div>
        );
    }
    
}

export default App;