import React from 'react';

export default class Todoitem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    let index = this.props.index;
    return (
      <div>
        <li>{this.props.name}</li>
        <span>
          <button onClick={() => this.props.remove(index)}>destroy me</button>
        </span>
      </div>
    );
  }
}