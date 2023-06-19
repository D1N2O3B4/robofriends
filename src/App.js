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

    onchange=(event)=>{
        this.setState({searchfield: event.target.value})
    }

    render () {
        const filterRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
        return(
            <div className="tc"> 
            <h1>ROBOT FRIENDS</h1>
            <SearchBox searchChange={this.onchange}/>
            <CardList robots={filterRobots} />
            </div>
        );
    }
    
}

export default App;