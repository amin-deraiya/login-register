import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      confirmPassword: null,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/home");
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const userRegister = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }),
    };
    fetch("http://localhost:3000/api/register", userRegister).then((response) =>
      response.json().then((data) => {
        if (response.status === 409) {
          alert(data.message);
        } else if (response.status === 200) {
          this.props.history.push("/login");
        } else {
          alert("Something Went wrong, Please try again");
        }
      })
    );
  };
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center myContainer">
        <div className="card border-primary w-25 responsiveCard bg-dark text-light">
          <h4 className="card-header border-bottom border-primary">Sign Up</h4>
          <div className="card-body">
            <form autoComplete="off">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  placeholder="Username"
                  aria-describedby="helpId"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                  aria-describedby="emailHelpId"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  required
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  id="confirmPassword"
                  required
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                />
              </div>
              <button
                className="btn btn-outline-light btn-block d-flex mx-auto justify-content-center"
                onClick={this.handleSubmit}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="d-flex justify-content-center card-footer border-top border-primary">
            <span>
              Already have an Account? <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
