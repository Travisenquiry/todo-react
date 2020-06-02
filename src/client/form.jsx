import React from 'react';

export default class Form extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <input id="input-list"></input>
        <button onClick={this.props.add}>press me</button>
        <button onClick={this.props.remove}>destroy me</button>
      </div>
    );
  }
}