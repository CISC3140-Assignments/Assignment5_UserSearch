import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
        <SearchForm getUser={this.getUser} />
        { this.state.newUser ? <p> Number of repos is:{ this.state.newUser } </p> : <p> Please enter a username </p> }
      </div>
    );
  }
}

export default App;
