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
        
        {<h6>Are you planning something,
          </h6>}
        {<h4>Are you a dreamer?
Do you always wanted to achieve something?
Anytime you planned something but lose it on halfway?
You are in the right Place..
We will be your proper mentor..
We will make you to learn,do and create something new @</h4>}
        <Typist.Delay ms={1000}/>
            <h1>Sainy.live</h1>
            instagram.com/sainyLive
      </Typist>
      
      </div>
    );
  }
}
