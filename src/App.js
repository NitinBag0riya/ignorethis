import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Post } from './components/Post'

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      post : []
    }
  }

  //api data -> api call -> state save 
  /// mount 

  //fetch , array iteration methods 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => this.setState({
      post : data
    }))
  }

  render(){
    return(
      <div>        
        <Post users={this.state.post} />
      </div>
    )
  }

}

