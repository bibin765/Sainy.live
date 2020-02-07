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
        
        {<h6>Whether you’re releasing a digital product,a new makeup collection, a limited-edition sneaker, or a popular collectible, you’re focused on a pre-launch buzz campaign. But if you overlook how your website or app will handle the hype, you’d make a serious error.
          </h6>}
        {<h4>Have a smooth and successful product launch experience @</h4>}
        <Typist.Delay ms={1000}/>
            <h1>Sainy.live</h1>
            Coming Soon
        <Typist.Backspace count={11} delay={200} />
      </Typist>
      
      </div>
    );
  }
}
