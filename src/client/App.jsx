import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      list: []
    }
  }

  executeMe(){
    let input = document.getElementById("input-list").value;
    if(input.length > 1 && input.length < 15){
      let updatedList = [...this.state.list];
      updatedList.push(input);
      this.setState({list: updatedList});
    }else {
      alert("Please enter more than 1 character and less than 15!");
    }
  }

  destroyMe() {
    let updatedList = [...this.state.list];
    updatedList.pop();
    this.setState({list: updatedList});
  }

  render() {
    let list = this.state.list.map(item => {
      return <li>{item}</li>
    });
    return (
      <div>
        <input id="input-list"></input>
        <button onClick={() => {this.executeMe();}}>press me</button>
        <button onClick={() => {this.destroyMe();}}>destroy me</button>
        <div>
          <h3>My Todo List</h3>
          <ul>
            {list}
          </ul>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);