import React, {Component} from 'react';
import '../App.css';

export default class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: ""
    }
}
  render() {
    return (
      <div>
        <div
          style={{backgroundColor: this.props.color}}
          className='box'>
        </div>
      </div>
    );
  }
}
