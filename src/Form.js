import React,{ Component } from "react";

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
    // event.preventDefault();
    // let FirstnameError = "";

    // const info = { name: this.name.value };
    // console.log(info)
    // const data = [...this.state.data, info];
    // console.log(data)
    // this.setState({
    //   data,
    // });
    // console.log(data)
    //   if(!data[0]["name"].match(/^[a-zA-Z]+$/)){
    //   FirstnameError="Enter Proper First name"
    //   this.setState({FirstnameError}) 
    // }
    // else{
    //     this.setState({data})
    //     console.log(this.state.data)
    //   }
    }
//different method to take input 

render(){
  return(
    <form  method="GET" id="vform"   name="vform"  >
    <fieldset>
    <legend><b><mark>Registration Form</mark></b></legend> 
    <div id="username_div">
      <label>Firstname</label> <br/>
      <input type="text" name="username" id="fname" onChange={this.handleSubmit} className="textInput"/>
      <div id="name_error"></div>
    </div>
    <br/>
    <div id="lname_div">
      <label>Lastname</label> <br/>
      <input type="text" name="lname" id="lname" value="" className="textInput"/>
      <div id="lname_error"></div>
    </div>
    <br/>
    <div id="dob_div">
      <label>DOB</label> <br/>
      <input type="date" name="dob" id="dob" value="" className="textInput"/>
      <div id="dob_error"></div>
    </div>
    <br/>
    <div id="email_div">
      <label>Email</label> <br/>
      <input type="text" name="email" id="email" value="" className="textInput"/>
      <div id="email_error"></div>
    </div>
    <br/>
    <div id="gender_div">
      <label>Gender</label>
      <input type="radio" name="gender" id="Male" value="Male" />Male
      <input type="radio" name="gender" id="Female" value="Female" />Female
      <div id="gender_error"></div>
    </div><br/>
      <div id="phone_div">
      <label>Phone Number</label> <br/>
      <input type="text" name="phone" id="phone" value="" className="textInput"/>
      <div id="phone_error"></div>
    </div><br/>
    <div id="add_div">
      <label>Address</label> <br/>
      <textarea type="text" name="add" id="add" value="" rows="5" cols="35" ></textarea>
      <div id="add_error"></div>
    </div>
    <br/>
    <div id = "skill_div">
      <label>Skills</label> <br/>
      <div id="Skillset"></div>

        <div id="skill_error"></div>
      </div><br/>
      <div id="city_div">
        <label>City</label>
              <select name="city" id="city" value="">
              <option value=""></option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Gandhinagar">Gandhinagar</option>
              <option value="Vadodra">Vadodra</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Jamnagar">Jamnagar</option>
              <option value="Bhavnagar">Bhavnagar</option>
          </select><br/>
           <div id="city_error"></div>
      </div><br/>

            <div id="state_div">
        <label>State</label>
              <select name="state" id="state" value="">
              <option value=""></option>
              <option value="Gujarat">Gujarat</option>
              <option value="Delhi">Delhi</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Mahrastra">Mahrastra</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
          </select><br/>
           <div id="state_error"></div>
      </div><br/>
      <div id="country_div">
        <label>Country</label>
              <select name="country" id="country" value="">
              <option value=""></option>
              <option value="India">India</option>
              <option value="Nepal">Nepal</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
          </select><br/>
           <div id="country_error"></div>
      </div><br/>

    <div id="formsubmitbutton">
    <input type="submit" name="register" id="submit" value="Register" className="btn"/>
    </div>
<div id="buttonreplacement" className="btn" style={{ height: 30, width: "auto", display: "none" }}>
  <img src="http://www.willmaster.com/images/preload.gif" alt="loading..." style={{paddingLeft: 180 +"px" }}/>
</div>
    </fieldset>
    <script type="text/javascript" src="scripts.js"></script>
    <p id="post"></p>
   </form>
    );
  }
}
