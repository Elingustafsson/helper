import React, {Component} from 'react';
import '../App.css';

export default class Child1 extends Component {
  render() {

    const {changeBlue, changePink, changeOrange} = this.props

    return (
      <div>
        <div>
          <p>Press button to change color</p>
          <button
            onClick={changeBlue}
            >Blue
          </button>
          <button
            onClick={changePink}
            >Pink
          </button>
          <button
            onClick={changeOrange}
            >Orange
          </button>
        </div>
      </div>

    );
  }
}
