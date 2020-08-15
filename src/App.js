import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import SearchForm from './components/SearchForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newUser: ''
    }
  }
  
  getUser = (event) => {
    event.preventDefault();
    const user = event.target.elements.username.value;
    if(user){
      axios.get(`https://api.github.com/users/${user}`)
           .then((res) => {
            console.log(res)
            const newUser = res.data.public_repos;
            this.setState({ newUser })
           })
    }
  }

  render() {
    return (
      <div className='App'>
        <header className="App-header">
        <SearchForm getUser={this.getUser} />
        { this.state.newUser ? <p> Wow! Keep working. You currently have { this.state.newUser } repositories </p> : <p> Oh no, no repos? Get to work! </p> }
        </header>
      </div>
    );
  }
}

export default App;
