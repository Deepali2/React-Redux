import React, {Component} from 'react';
import Interests from './Interests';
import './Pet.css';

class Pet extends Component {
  render() {
    return (
      <div className="card">
        <h2 className="name">Picture I took</h2>
        <img src="https://i.imgur.com/SKGrXz7.jpg" alt="picture I took"/>
        <h5 style={{fontSize: "2em", margin: "2px"}}>Hobbies:</h5>
        <Interests />               
      </div>
    );
  }  
}

export default Pet;