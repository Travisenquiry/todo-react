import React from 'react';

export default class Todoitem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    let index = this.props.index;
    let button;
    if(this.props.type === "itemlist"){
      button = <button onClick={() => this.props.remove(index)}>destroy me</button>
    }
    return (
      <div>
        <li>{this.props.name}</li>
        <span>
          {button}
        </span>
      </div>
    );
  }
}