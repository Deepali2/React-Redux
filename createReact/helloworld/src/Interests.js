import React, {Component} from 'react';


class Interests extends Component {
  render() {
    const liStyle = {fontSize: "1.5em"};
    const hobbies = ["Sleeping", "Eating", "Climbing", "traveling"];
    return(
      <ul>
        {hobbies.map(function(hobby, index) {
          return <li style={liStyle} key={index}>{hobby}</li>
        })}
      </ul>
    );
  }
}

export default Interests;