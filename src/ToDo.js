import React, { Component } from "react";
import { Card } from "./ToDoComp";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ID: 1,
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const ID = this.state.ID;
    this.setState({
      ID: ID + 1,
    });
    // this.state.ID=this.state.ID+1
    const info = { task: this.task.value, ID };
    const data = [...this.state.data, info];
    this.setState({
      data: data,
    });
    this.task.value = "";
    console.log(data);
  };
  //
  onDelete = index => {
    this.setState({
      data: [
        ...this.state.data.slice(0, index),
        ...this.state.data.slice(index + 1)
      ]
    });
   };

  //  [1,2,3,4,5]
  //  slice(0,2) (3)
  //  [...[1,2],...[4,5]]
  //... understand
  //   console.log(this.state.data)
  // };
  // onDelete = (ID) => {
  //   this.setState({
  //     data: [],
  //   });
  // };

  // onDelete = ID => {
  //   const data = this.info.filter(item => item !== this.ID);
  //   this.setState({ data: data });
  // };

  render() {
    return (
      <div className="container">
        <h1>ToDo List</h1>

        <hr />

        <div className="row" id="row">
          <form onSubmit={this.onSubmit} style={{ marginLeft: 25 + "px" }}>
            <input
              type="text"
              placeholder="Enter Task"
              ref={(input) => (this.task = input)}
            required/>
            <button type="submit">Save</button>
          </form>
        </div>
        <div className="row">
          {this.state.data.map((info,index) => (
            <Card  info={info} onDelete={() => this.onDelete(index)} />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default ToDo;
