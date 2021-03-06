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
      city: null,
      state: null,
      country: null,
      gender: null,
      dataskills: [],
      skill: null,
      errors: {
        username: "",
        lastname: "",
        email: "",
        phone: "",
        add: "",
        dob: "",
        city: "",
        state: "",
        country: "",
        gender: "",
        skill: "",
      },
    };
  }
  componentDidMount() {
    const apiUrl = "http://localhost:3000/api/skills";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("This is your data", data);
        this.setState({ dataskills: data });
      });
  }

  validateForm = (errors) => {
    let valid = true;
    console.log(Object.values(errors));
    Object.values(errors).forEach((val) =>
      val.length > 0 ? (valid = false) : ""
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
        console.log("country", value);
        errors.country = value.length > 0 ? "" : "Choose One Country";
        break;
      case "gender":
        // console.log((value!== ""))
        errors.gender = value !== "" ? "" : "Please select your gender";
        break;
      case "skill":
        console.log(value.length > 2);
        errors.skill = value.length > 2 ? "" : "Please Select 3 skills";
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
    const Skill = event.target.skill[0].name;
 
    // console.log(event.target)
    // console.log(Skill[0].name)
    // console.log(SkillValue)
    var  gender= [];
    var SkillValue = [];
    Gender.forEach((item) => {
      gender.push(item.name);
    });
    var GenderName = gender[0]
    document
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach((item) => {
        SkillValue.push(item.value);
      });
      var SkillId = []
      document
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach((item) => {
        SkillId.push(item.id);
      });
    // const SkillValue = event.target.skill.value;

    this.validate(Firstname, errors, NameValue);
    this.validate(Lastname, errors, LastValue);
    this.validate(Email, errors, EmailValue);
    this.validate(Phone, errors, PhoneValue);
    this.validate(Add, errors, AddValue);
    this.validate(Dob, errors, DobValue);
    this.validate(City, errors, CityValue);
    this.validate(State, errors, StateValue);
    this.validate(Country, errors, CountryValue);
    this.validate(GenderName, errors, GenderValue);
    this.validate(Skill, errors, SkillValue);

    if (this.validateForm(this.state.errors)) {
      console.log("Valid Form");
      const post_data={
        Firstname:NameValue,
        Lastname:LastValue,
        Email:EmailValue,
        Phone:PhoneValue,
        Add:AddValue,
        Dob:DobValue,
        City:CityValue,
        State:StateValue,
        Country:CountryValue,
        GenderName:GenderValue,
        Skill:SkillId
      }
      console.log(post_data)
      fetch("http://localhost:3000/api/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(post_data),
      })
        .then((res) => {
          console.log("then 1");
          return res.json();
        })
    } else {
      console.log("Invalid Form");
    }
  };

  //different method to take input

  render() {
    const { errors } = this.state;
    const obj = {
      city: ["", "Ahmedabad", "Surat", "Rajkot"],
      state: ["", "Gujarat", "Maharastra"],
      country: ["", "India", "Canada"],
    };

    return (
      <div className="container">
        <form method="GET" id="vform" name="vform" onSubmit={this.handleSubmit}>
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
              <input
                type="radio"
                name="gender"
                id="Male"
                value="Male"
                onChange={this.handleChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                id="Female"
                value="Female"
                onChange={this.handleChange}
              />
              Female
              <br />
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
              {this.state.dataskills.map((item) => (
                <label>
                  <input
                    type="checkbox"
                    name="skill"
                    key={item.Skill_id}
                    id={item.Skill_id}
                    value={item.Skill_name}
                  />
                  {item.Skill_name}
                </label>
              ))}
              {errors.skill.length > 0 ? (
                <span className="error">{errors.skill}</span>
              ) : null}
            </div>
            <br />
            <div id="city_div">
              <label>City</label>
              <select name="city" id="city" onChange={this.handleChange}>
                {obj["city"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
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
                {obj["state"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
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
                {obj["country"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
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
