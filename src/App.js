import React, { Component } from 'react';
import NavBar from './NavBar' 
import './App.css';
// import Blog from './Blog.js'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FaBeer } from 'react-icons/fa';
// import MDReactComponent from 'markdown-react-js';


class App extends Component {
  render(){
    return (
      <div className="App">
      < NavBar />
      <Jumbotron fluid> <h1>James Ross<FaBeer /> </h1></Jumbotron>
      </div>
    )
  }
}

export default App;
