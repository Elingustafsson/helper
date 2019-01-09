import React, {Component} from 'react';
import Child1 from './child1';
import Child2 from './child2';
import '../App.css';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: ""
    }
    this.changeBlue = this.changeBlue.bind(this);
    this.changePink = this.changePink.bind(this);
    this.changeOrange = this.changeOrange.bind(this);
  }

  changeBlue = (e) => {
    console.log("blå");
    this.setState(state => ({
      backgroundColor: "blue"
    }))
  }

  changePink = (e) => {
    console.log("rosa");
    this.setState(state => ({
      backgroundColor: "pink"
    }))
  }

  changeOrange = (e) => {
    console.log("orange");
    this.setState(state => ({
      backgroundColor: "orange"
    }))
  }

  render() {
    return (
      <div className="main">
        <h1>Send props from child1 to parent and down to child2</h1>
        <Child1
          changeBlue={this.changeBlue}
          changePink={this.changePink}
          changeOrange={this.changeOrange} />
          <div>
        <Child2
            color={this.state.backgroundColor} />
          </div>
      </div>
    );
  }
}
