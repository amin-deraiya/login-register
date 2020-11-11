import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
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
    const requestOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    };
    fetch("http://localhost:3000/api/login", requestOptions).then((response) =>
      response.json().then((data) => {
        if (response.status === 401) {
          alert(data.message);
        } else if (response.status === 404) {
          alert(data.message);
        } else if (response.status === 200) {
          localStorage.setItem("token", data.token);
          this.props.history.push("/home");
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
          <h4 className="card-header border-bottom border-primary">Login</h4>
          <div className="card-body">
            <form autoComplete="off">
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
              <button
                className="btn btn-outline-light btn-block d-flex mx-auto justify-content-center"
                onClick={this.handleSubmit}
              >
                Login
              </button>
            </form>
          </div>
          <div className="d-flex justify-content-center card-footer border-top border-primary">
            <span>
              Don't have an Account? <Link to="/register">Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
