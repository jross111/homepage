import React, { Component } from 'react';
import NavBar from './NavBar' 
import './App.css';
// import Blog from './Blog.js'
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Alert from 'react-bootstrap/Alert';
import { FaBeer } from 'react-icons/fa';
// import MDReactComponent from 'markdown-react-js';


class App extends Component {
  render(){
    return (
      <div className="App">
      < NavBar />
      <Jumbotron> <h1>James Ross<FaBeer /> </h1></Jumbotron>
        <Alert ></Alert>
        <Button variant='danger'>Hello</Button>



      </div>
    )
  }
}

export default App;
