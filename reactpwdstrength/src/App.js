import React from 'react';
import logo from './logo.svg';
import './App.css';
import PasswordChecker from './PasswordChecker.js';
import FancyCounter from './FancyCounter.js';
import checkPassword from './checkPassword'




class App extends React.Component {
  state = {
    password: '',
    score: 0
  }

  handleChange = evt => {
    // console.log(evt.target.value)
  
    const { score } = checkPassword(evt.target.value)
    
    this.setState({
      password: evt.target.value,
      score: score
    })

    // this.setState(prevState => prevState + 1) use this way to setState to avoid prev state not being atomic
    // since setting state in react is async
  }

  render() {
    const { password, score } = this.state
    return (
      <div className="App">
        <PasswordChecker password={ password } onTyping={ this.handleChange } score={ score }/>
        <FancyCounter />
      </div>
    )
  }
}

export default App;
