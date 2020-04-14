import React from 'react';
import styled from 'styled-components';
import classes from './Person.css';

const person = ( props ) => {
   console.log('[Person.js] renderng...');
   
    return (
        <div className={classes.Person} onClick={props.click}>
            <p>I'm {props.name}. I am {props.age} years old.</p>
            <p>{ props.children }</p>
        </div>
    )
}

export default person;