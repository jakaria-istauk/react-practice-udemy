import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit  = (props) => {
  const toogleBtnRef = useRef(null);

  useEffect( () => {
    console.log('[Cockpit.js] useEffect');

  // setTimeout(() => {
  //     alert( 'Saved Data to cloud!' );
  //   }, 1000);
  toogleBtnRef.current.click();
    return ()=>{
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return ()=>{
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

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
          ref={toogleBtnRef}
          className={classes.Button}  
          onClick={props.clicked}>Toggle Persons</button>
          <AuthContext.Consumer>
            { context => <button onClick={context.login} className={classes.Button} >Log in</button> }
          </AuthContext.Consumer>
      </div>
  );
};

export default React.memo( cockpit );