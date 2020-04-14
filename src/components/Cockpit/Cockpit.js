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
            <h1 className={assignedClasses.join(' ')}>{props.title}</h1>
            <button 
            className={classes.Button}  
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;