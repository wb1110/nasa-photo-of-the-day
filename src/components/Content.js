import React from "react";

const Content = (props) => {

    

    return (
        <div className='image-containter'>
            <h1>
                {props.nasa.date}
            </h1>
            <img 
                alt='of-the-day'
                src={props.nasa.url}
            />
            <h3>
                {`${props.nasa.copyright}, ${props.nasa.title}`}
            </h3>
            <p>
                {props.nasa.explanation}
            </p>
        </div>
        
    );
};



export default Content;