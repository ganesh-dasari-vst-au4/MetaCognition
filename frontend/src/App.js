import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    axios
      .get("http://localhost:3010/student")
      .then((res) => {
        this.props.dispatch({ type: "add", payload: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid mx-auto bg-secondary py-1 mb-5">
          <h4 className="text-center">MetaCognition</h4>
        </div>
        <div className="container my-auto mt-5 pt-5">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Student Name</th>
                <th>Subject</th>
                <th>Term</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((elem) => {
                return (
                  <tr>
                    <td>
                      {elem.first_name} {elem.last_name}
                    </td>
                    <td>{elem.depart.name}</td>
                    <td>{elem.depart.term}</td>
                    <td>{elem.depart.depart}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const fromStore = (state) => {
  return {
    data: state.data,
  };
};

export default connect(fromStore)(App);
