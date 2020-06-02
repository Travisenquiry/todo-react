import React from 'react';

export default class Todoitem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <li>{this.props.name}</li>
      </div>
    );
  }
}