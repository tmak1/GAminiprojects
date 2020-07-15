import React from 'react'
// import { component, useState } from 'react' import the built in useState api  
import Bar from './Bar.js';


const messageGen = obj => {
    let msg = ''
    switch(obj.score) {
        case 0:
            msg = 'please type in password'
            break;
        case 1:
            msg = 'you must be joking'
            break;
        case 2:
            msg = 'very weak'
            break;
        case 3:
            msg = 'weak'
            break;
        case 4:
            msg = 'medium'
            break;
        case 5:
            msg = 'strong'
            break;
        case 5:
            msg = 'very strong'
            break;
    }
    return msg + ' ' 
}

export default function PasswordChecker(props) {

    // we want to store a piece of string - password
    // const [state, setState] = useState('') - hooks api returns an array of 2 elements
    // state is the state you saved, setState is a function you can use to set the state
    // for our case we will call the state password and setState setPassword
    // const [password, setPassword] = useState('')
    // now use these to handlechnage to update or to display

    // const handleChange = evt => {
    //     setPassword(evt.target.value)
    // }
 

    return (    
        <div className="main">
            <div>
                <input type="text" onChange={props.onTyping}/>
            </div>
            <div>{ messageGen(props.score) }</div>
            <Bar val={ props.score } max={6}/> 
            <div>{ props.score }</div>
        </div>
        
    )
}