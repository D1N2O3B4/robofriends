import React from "react";

const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <div className="tc">
            <input
            className="pa2 ba b--blue bg-lightest-blue " 
            type="Search"  
            placeholder="Search"
            onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;