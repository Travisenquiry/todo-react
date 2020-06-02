import React from 'react';
import { hot } from 'react-hot-loader';
import Form from 'form';
import Itemlist from 'itemlist';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      list: []
    }

    this.executeMe = this.executeMe.bind(this);
    this.destroyMe = this.destroyMe.bind(this);
  }

  executeMe(){
    console.log("Executed");
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

    return (
      <div>
        <Form add={this.executeMe} remove={this.destroyMe} />
        <div>
          <h3>My Todo List</h3>
          <ul>
            <Itemlist list={this.state.list} />
          </ul>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);