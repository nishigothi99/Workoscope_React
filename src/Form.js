import React,{ Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class FORM extends Component {
  constructor(props) {
    super(props);
    this.state = {
    data:[],
    FirstnameError: ""
    };
  }

  // validate= () =>{
  //   let FirstnameError = "";
  //   var name=this.state.data
  //   console.log(name)
  //   // if(!name.match(/^[a-zA-Z]+$/)){
  //   //   FirstnameError="Enter Proper First name"
  //   //   this.setState({FirstnameError})
  //   //   return false
  //   // }
  //   return true
  // }

  handleSubmit= (event) =>{
    event.preventDefault();
    let FirstnameError = "";

    const info = { name: this.name.value };
    console.log(info)
    const data = [...this.state.data, info];
    console.log(data)
    this.setState({
      data,
    });
    this.name.value = "";
    console.log(data)
      if(!data[0]["name"].match(/^[a-zA-Z]+$/)){
      FirstnameError="Enter Proper First name"
      this.setState({FirstnameError}) 
    }
    else{
        this.setState({data})
        console.log(this.state.data)
      }
    }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
              type="text"
              placeholder="Enter Task"
              ref={(input) => (this.name = input)}
              required
              />
          <div style={{color:'red'}}>{this.state.FirstnameError}</div>
        <br />

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <br />
          <Form.Control
            name="LastName"
            type="text"
            placeholder="Enter Lastname"
          />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <br />
          <Form.Control type="email" name="Email" placeholder="Enter email" />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label>Date</Form.Label>
          <br />
          <Form.Control type="date" name="date" />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <br />
          <Form.Control
            type="text"
            as="textarea"
            name="add"
            placeholder="Enter Address"
          />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control type="password" placeholder="Current-Password" />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label>Radios</Form.Label>
          <Form.Check
            type="radio"
            label="first radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
          <Form.Check
            type="radio"
            label="second radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
          <Form.Check
            type="radio"
            label="third radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
          />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label>Checkbox</Form.Label>
          <Form.Check
            type="checkbox"
            label="first radio"
            name="formHorizontalRadios"
            id="formHorizontalCheck1"
          />
          <Form.Check
            type="checkbox"
            label="second radio"
            name="formHorizontalCheck"
            id="formHorizontalCheck2"
          />
          <Form.Check
            type="checkbox"
            label="third radio"
            name="formHorizontalRadios"
            id="formHorizontalCheck3"
          />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Control as="select">
            <option></option>
            <option>Ahmedabad</option>
            <option>Surat</option>
            <option>Gandhinagar</option>
            <option>Rajkot</option>
          </Form.Control>
        </Form.Group>
        <br />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
