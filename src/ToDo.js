import React, { Component } from "react"

class ToDo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const task = this.task.value;
    const info = {task: task};
    const data = [...this.state.data, info];
    this.setState({
      data: data
    });
    console.log(data)
  };

  onDelete = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  };

  render() {
    return (
        <div className="container" >
          <h1>ToDo List</h1>

          <hr/>

          <div className="row" id="row">
            <form onSubmit={this.onSubmit} style={{marginLeft: 25+"px"}} >
              <input
                  type="text"
                  placeholder="Enter Task"
                  ref={input => this.task = input}/>
              <button type="submit" style={{marginLeft: 32+"px"}}>Save</button>
              
            </form>
          </div>
          <div className="row">
            {
              this.state.data.map((info, index) => <Card key={index} info={info} onDelete={() => this.onDelete(index)}/>)
            }
          </div>
          <hr/>
        </div>
    )
  }
}

const Card = props =>
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-title" id="card">{props.info.task}</p>
        </div>
      </div>
    </div>;

export default ToDo;

