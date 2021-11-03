import React, {useState, useEffect} from "react";
import App from "../App";

const Content = (props) => {
    const [img, setImg] = useState(props.nasa);
    console.log(img);

    return (
        <div className='image-containter'>
            <img 
                src={img}
            />
            
        </div>
    );
};



export default Content;