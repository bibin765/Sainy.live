import React, {Component} from 'react';
import Typist from 'react-typist';
 
export default class MyComponent extends Component {
 
  render() {
    return (
      <div className="container">
      <Typist>
        <br />
        <br />
        <br />
        <br />
        
        {<h6>Whether you’re planning something,
          </h6>}
        {<h4>Have a smooth and successful planning experience @</h4>}
        <Typist.Delay ms={1000}/>
            <h1>Sainy.live</h1>
            instagram.com/sainyLive
      </Typist>
      
      </div>
    );
  }
}
