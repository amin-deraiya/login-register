import React, { Component } from "react";

export default class Home extends Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div className="row bg-info text-dark">
        <div class="col">
          <p className="display-3">Dashboard</p>
        </div>
        <div class="col justify-content-end d-flex">
          <button
            className="btn btn-danger rounded-0"
            onClick={() => {
              localStorage.removeItem("token");
              this.props.history.push("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}
