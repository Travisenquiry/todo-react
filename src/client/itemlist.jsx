import React from 'react';
import Todoitem from 'todoitem';

export default class Itemlist extends React.Component {
  constructor(props){
    super(props);

  }

  createList(array){
    let items = array;
    let list = items.map((item, index) => {
        return <Todoitem name={item} remove={this.props.remove} index={index}/>
    });
    return list;
  }

  render() {
    let allList = this.createList(this.props.list);
    return (
      <div>
        {allList}
      </div>
    );
  }
}