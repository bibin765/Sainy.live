import React, {Component} from 'react';
import Typist from 'react-typist';
 
export default class MyComponent extends Component {
 
  render() {
    return (
      <div className="Container">
      <Typist>
        Coming Soon
        <Typist.Backspace count={11} delay={200} />
        {<h3>Please Wait</h3>}
        <Typist.Delay ms={500}/>
            <h1>Sainy.live</h1>
      </Typist>
      </div>
    );
  }
}
