import React from 'react';
import classes from './Cockpit.css';

const cockpit  = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if( props.showPersons ){
        btnClass = classes.red;
    }

    if( props.persons.length <= 2 ){
      assignedClasses.push(classes.red);
    }
    if( props.persons.length <= 1 ){
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}>Hello React. this is my first app</h1>
            <button 
            className={classes.Button} alt = {props.showPersons} 
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;