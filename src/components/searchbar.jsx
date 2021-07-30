import React, { Component } from "react";
import firebase from "../firebase/firebase";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { first5Names: this.fetchFirst5Names() };
  }

  fetchFirst5Names = () => {
    const resultList = [];
    const db = firebase.database();
    const subjectsRef = db.ref("subjects");
    const first5names = subjectsRef.orderByChild("name").limitToLast(5);

    first5names.once("value", (snapshot) => {
      snapshot.forEach((child) => {
        resultList.push(child.val());
        console.log(child.val());
      });
    });

    return resultList;
  };

  render() {
    const search = () => {};

    return (
      <div className="container m1">
        <div className="input-group mb-3" onChange={search}>
          <input
            type="text"
            className="form-control"
            placeholder="Find or create a review..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <br />
          <span className="input-group-text" id="basic-addon2">
            @
          </span>
          <br />
        </div>
        <ul className="list-group" id="myList">
          {this.state.first5Names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
