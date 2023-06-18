import React from "react";
import 'tachyons';

const Hello = (props) =>{

return(
    <div className='f1 tc'>
        <h1>Welcome</h1>
        <p>{props.greeting}</p>
    </div>
);
}

export default Hello;