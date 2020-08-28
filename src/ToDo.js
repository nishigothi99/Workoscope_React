import React, { Component } from "react"

class ToDo extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
      }
addItem(e) {
    if (this._inputElement !== "") {
      var newItem={
        items: this._inputElement.value,
      }
    }
       
    e.preventDefault();
  }

render() {
    return (
        <div className="ToDo">
        <h1>Hello</h1>
        <form onSubmit={this.addItem.bind(this)}>
          <input ref={(a) => this._inputElement = a} 
                  placeholder="enter task">
          </input>
          <button type="submit">add</button>
        </form>
        </div>
    )
  }
}
export default ToDo;