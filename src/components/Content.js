import React from "react";
import styled from 'styled-components';

const Content = (props) => {

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const DayImage = styled.img`
        width: 50%;
    `;

    const Text = styled.p`
        width: 50%;
    `;


    return (
        <Wrapper className='image-containter'>
            <h1>
                {props.nasa.date}
            </h1>
            <DayImage 
                alt='of-the-day'
                src={props.nasa.url}
            />
            <h3>
                {`${props.nasa.copyright}, ${props.nasa.title}`}
            </h3>
            <Text>
                {props.nasa.explanation}
            </Text>
        </Wrapper>
        
    );
};



export default Content;