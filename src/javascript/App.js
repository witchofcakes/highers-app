import React, { Component } from 'react';
import '../stylesheets/App.css';
import Main from '../routes/main.js';
import NavBar from "../components/navbar";

class App extends Component {

  render(){
    return (
        <body>
        <div className="page-content" />
        <Main/>
        </body>

    );

  }
}

export default App;