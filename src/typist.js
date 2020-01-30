import React, {Component} from 'react';
import Typist from 'react-typist';
 
export default class MyComponent extends Component {
 
  render() {
    return (
      <div className="Container">
      <Typist>
        Coming Soon
        <Typist.Backspace count={11} delay={200} />
        {<h1>Coming very Soon</h1>}
        <Typist.Delay ms={500}/>
            Sainy.live
      </Typist>
      </div>
    );
  }
}
