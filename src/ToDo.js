import React, { Component } from "react";
import { Card } from "./ToDoComp";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
      editing: true,
      data: [],
      ID: 0,
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
  onDelete = (index) => {
    console.log("Inside delete");
    // var ID = this.state.ID
    var _data = this.state.data;
    for (var i = index ; i < _data.length ; i++) {
       _data[i].ID = _data[i].ID-1
     console.log(_data[i].ID)
    }
    this.setState({
      data: [..._data.slice(0, index), ..._data.slice(index + 1)],
    });
  };
  onUpdate = (event, task, ID) => {
    const data = this.state.data;
    data.map((item) => {
      if (ID === item.ID) {
        console.log("hi");
        item.task = task;
      }

      return item;
    });
    this.setState({
      data,
    });
  };

  onEdit = (index, ID) => {
    console.log("inside Edit");
    console.log("this.state.index", index, " this.state.ID", ID);

    this.setState({
      index,
    });
  };

  keyHandle = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      console.log("hello");
      document.getElementById("enter").style.display = "none";
      // var index = this.state.index
      this.setState({
        index: null,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>ToDo List</h1>

        <hr />

        <div className="row" id="row">
          <form onSubmit={this.onSubmit} style={{ marginLeft: 200 + "px" }}>
            <input
              type="text"
              placeholder="Enter Task"
              ref={(input) => (this.task = input)}
              required
              />
            <button type="submit">Save</button>
          </form>
        </div>
        <div className="row">
          {this.state.data.map((info, index) => (
            <Card
              info={info}
              index={this.state.index}
              onDelete={() => this.onDelete(index)}
              onEdit={(ID) => this.onEdit(index, ID)}
              onUpdate={(event, value, ID) => this.onUpdate(event, value, ID)}
              keyHandle={(event) => this.keyHandle(event)}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default ToDo;
