import React from 'react';
import NavBar from './NavBar' 
import './App.css';
import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';

function App () {
  return (
    <>


      <div className="App">
      < NavBar />
        <h1 className='primary'>James Ross</h1>
        <Button variant='danger'>Hello</Button>
      </div>


    </>
  );
}

export default App;
