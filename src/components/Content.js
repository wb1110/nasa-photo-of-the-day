import React, {useState, useEffect} from "react";
import App from "../App";

const Content = (props) => {

    

    return (
        <div className='image-containter'>
            <img 
                alt='of-the-day'
                src={props.nasa.hdurl}
            />
            <p>
                
            </p>
        </div>
        
    );
};



export default Content;