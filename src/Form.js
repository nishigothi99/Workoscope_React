import React, { Component } from "react";

export default class FORM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      lastname: null,
      email: null,
      phone: null,
      add: null,
      dob: null,
      city:null,
      state:null,
      country:null,
      gender:null,
     dataskills:'default',
      errors: {
        username: "",
        lastname: "",
        email: "",
        phone: "",
        add: "",
        dob: "",
        city:"",
        state:"",
        country:"",
        gender:""
        
      },
    };
  }
  componentDidMount() {
    const dataskills = this.state.dataskills
    const url='http://localhost:3000/api/skills'
    
   fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log('This is your data', data)
      var arr = []
      data.forEach((item)=>{
        arr.push(item["Skill_name"])
      })
    })
    .then((data) => this.setState({ dataskills: data }))
    .catch((err)=>{
      console.log("Error",err)
    });

  }
  // fetch(url)
  // .then((response) => {
  //   console.log(response);
  //   return response.json();
  // })
  // .then((data) => {
  //   // console.log(data)
  //   data.forEach((item) => {
  //     var hold = document.getElementById("Skillset");
  //     var checkbox = document.createElement("input");
  //     checkbox.setAttribute("type", "checkbox");
  //     checkbox.setAttribute("id", item["Skill_name"]);
  //     checkbox.setAttribute("value", item["Skill_id"]);
  //     checkbox.setAttribute("name",item["Skill_name"]);
  //     var label = document.createElement("label");
  //     var tn = document.createTextNode(item["Skill_name"]);
  //     label.appendChild(tn);
  //     hold.appendChild(label);
  //     hold.appendChild(checkbox);
  //   });
  // })
  // .catch((err) => console.log("Skill not fetched"));


  validateForm = (errors) => {
    let valid = true;
    console.log(Object.values(errors))
    Object.values(errors).forEach((val) =>
      val.length > 0 ? (valid = false) : ''
    );
    return valid;
  };

  validate = (name, errors, value) => {
    const validName = RegExp(/^[a-z]{3,12}$/i);
    const validEmail = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const validPhone = RegExp(/^\d{10}$/);
    // console.log(name);
    switch (name) {
      case "username":
        errors.username = validName.test(value)
          ? ""
          : "Full Name must be 3 characters long!";
        break;
      case "lastname":
        errors.lastname = validName.test(value)
          ? ""
          : "Last name must be 3 characters long";
        break;
      case "email":
        errors.email = validEmail.test(value) ? "" : "Enter a valid email";
        break;
      case "phone":
        errors.phone = validPhone.test(value)
          ? ""
          : "Enter a valid Phone number";
        break;
      case "add":
        errors.add = value.length > 0 ? "" : "Address cannot be empty";
        break;
      case "dob":
        errors.dob = value.length > 0 ? "" : "DOB cannot be empty";
        break;
        case "city":
          errors.city = value.length > 0 ? "" : "Choose One City";
          break;
        case "state":
          errors.state = value.length > 0 ? "" : "Choose One State";
          break;
        case "country":
          console.log("country",value)
          errors.country = value.length > 0 ? "" : "Choose One Country";
          break;
        case "gender":
          console.log((value!== ""))
          errors.gender = (value!== "") ? "" : "Please select your gender";
          break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target);
    const { name, value } = event.target;
    let errors = this.state.errors;
    this.validate(name, errors, value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.state.errors;
    const Firstname = event.target.username.name;
    const NameValue = event.target.username.value;
    const Lastname = event.target.lastname.name;
    const LastValue = event.target.lastname.value;
    const Email = event.target.email.name;
    const EmailValue = event.target.email.value;
    const Phone = event.target.phone.name;
    const PhoneValue = event.target.phone.value;
    const Add = event.target.add.name;
    const AddValue = event.target.add.value;
    const Dob = event.target.dob.name;
    const DobValue = event.target.dob.value;
    const City = event.target.city.name;
    const CityValue = event.target.city.value;
    const State = event.target.state.name;
    const StateValue = event.target.state.value;
    const Country = event.target.country.name;
    const CountryValue = event.target.country.value;
    const Gender = event.target.gender;
    const GenderValue = event.target.gender.value;
     var arr=[]
    Gender.forEach((item) =>{
      arr.push(item.name)
    })
    const Skills = event.target.skill.value;
    // const SkillValue = event.target.skill.value;
    console.log(Skills)
    
    this.validate(Firstname, errors, NameValue);
    this.validate(Lastname, errors, LastValue);
    this.validate(Email, errors, EmailValue);
    this.validate(Phone, errors, PhoneValue);
    this.validate(Add, errors, AddValue);
    this.validate(Dob, errors, DobValue);
    this.validate(City, errors, CityValue);
    this.validate(State, errors, StateValue);
    this.validate(Country, errors, CountryValue);
    this.validate(arr[0], errors, GenderValue);


    if (this.validateForm(this.state.errors)) {
      console.log("Valid Form");
    } else {
      console.log("Invalid Form");
    }
  };


  //different method to take input

  render() {
    const { errors } = this.state;
    const obj = {
      city: ["","Ahmedabad","Surat","Rajkot"],
      state:["","Gujarat","Maharastra"],
      country:["","India","Canada"]}
    
    return (
      <div className="container" >
        <form method="GET" id="vform" name="vform"  onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>
              <b>
                <mark>Registration Form</mark>
              </b>
            </legend>
            <div id="username_div">
              <label>Firstname</label> <br />
              <input
                type="text"
                name="username"
                id="fname"
                onChange={this.handleChange}
                className="textInput"
              />
              {errors.username.length > 0 ? (
                <span className="error">{errors.username}</span>
              ) : null}
            </div>
            <br />
            <div id="lname_div">
              <label>Lastname</label> <br />
              <input
                type="text"
                name="lastname"
                id="lname"
                onChange={this.handleChange}
                className="textInput"
              />
              {errors.lastname.length > 0 ? (
                <span className="error">{errors.lastname}</span>
              ) : null}
            </div>
            <br />
            <div id="dob_div">
              <label>DOB</label> <br />
              <input
                type="date"
                name="dob"
                id="dob"
                onChange={this.handleChange}
                className="textInput"
              />
              {errors.dob.length > 0 ? (
                <span className="error">{errors.dob}</span>
              ) : null}
            </div>
            <br />
            <div id="email_div">
              <label>Email</label> <br />
              <input
                type="text"
                name="email"
                id="email"
                onChange={this.handleChange}
                className="textInput"
              />
              {errors.email.length > 0 ? (
                <span className="error">{errors.email}</span>
              ) : null}
            </div>
            <br />
            <div id="gender_div">
              <label>Gender</label>
              <input type="radio" name="gender" id="Male" value="Male" onChange={this.handleChange}/>
              Male
              <input type="radio" name="gender" id="Female" value="Female" onChange={this.handleChange}/>
              Female<br/>
              {errors.gender.length > 0 ? (
                <span className="error">{errors.gender}</span>
              ) : null}
            </div>
            <br />
            <div id="phone_div">
              <label>Phone Number</label> <br />
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={this.handleChange}
                className="textInput"
              />
              {errors.phone.length > 0 ? (
                <span className="error">{errors.phone}</span>
              ) : null}
            </div>
            <br />
            <div id="add_div">
              <label>Address</label> <br />
              <textarea
                type="text"
                name="add"
                id="add"
                onChange={this.handleChange}
                rows="5"
                cols="35"
              ></textarea>
              <br />
              {errors.add.length > 0 ? (
                <span className="error">{errors.add}</span>
              ) : null}
            </div>
            <br />
            <div id="skill_div">
              <label>Skills</label> <br />
              <div id="Skillset">
                {this.state.dataskills}
              {/* {this.state.data["Skill_name"].forEach((item)=>
              (
                // <input type="checkbox" name={item} value={item}/>
              <label>{item}</label>
              )
              )} */}
              </div>
              <div id="skill_error"></div>
            </div>
            <br />
            <div id="city_div">
              <label>City</label>
              <select name="city" id="city" onChange={this.handleChange}>
              {obj["city"].map((item) =>
                    <option key={item}>{item}</option>
                 )}
              </select>
              <br />
              {errors.city.length > 0 ? (
                <span className="error">{errors.city}</span>
              ) : null}
            </div>
            <br />

            <div id="state_div">
              <label>State</label>
              <select name="state" id="state" onChange={this.handleChange}>
              {obj["state"].map((item) =>
                    <option key={item}>{item}</option>
                 )}
              </select>
              <br />
              {errors.state.length > 0 ? (
                <span className="error">{errors.state}</span>
              ) : null}
            </div>
            <br />
            <div id="country_div">
              <label>Country</label>
              <select name="country" id="country" onChange={this.handleChange}>
              {obj["country"].map((item) =>
                    <option key={item}>{item}</option>
                 )}
              </select>
              <br />
              {errors.country.length > 0 ? (
                <span className="error">{errors.country}</span>
              ) : null}
            </div>
            <br />

            <div id="formsubmitbutton">
              <button type="submit" name="register" id="submit" className="btn">
                Register
              </button>
            </div>
          </fieldset>
          <script type="text/javascript" src="scripts.js"></script>
        </form>
      </div>
    );
  }
}

// dropDown using Map