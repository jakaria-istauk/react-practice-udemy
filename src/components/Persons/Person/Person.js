import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    padding: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    border-radius: 4px;
`;

const person = ( props ) => {
    const style = {
        
    }
    return (
        <div className="Person" style={style} onClick={props.click}>
        <StyleDiv>
            <p>I'm {props.name}. I am {props.age} years old.</p>
            <p>{ props.children }</p>
        </StyleDiv>
        </div>
    )
}

export default person;