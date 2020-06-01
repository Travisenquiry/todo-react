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
    let updatedList = [...this.state.list];
    updatedList.push(input);
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