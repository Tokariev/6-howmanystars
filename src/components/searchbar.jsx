import React, { Component } from "react";
import firebase from "../firebase/firebase";
import { db } from "../firebase/firebase";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { readError: null, firs5names: [], rating: 2 };
  }
  async componentDidMount() {
    try {
      this.setState({ readError: null });

      db.ref("subjects")
        .orderByChild("rating")
        .limitToFirst(10)
        .on("value", (snapshot) => {
          let firs5names = [];
          snapshot.forEach((snap) => {
            firs5names.push(snap.val());
          });
          this.setState({ firs5names });
        });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }

  search = (event) => {
    const serchText = event.target.value;

    try {
      this.setState({ readError: null });
      db.ref("subjects")
        .orderByChild("name")
        .startAt(serchText)
        .endAt(serchText + "\uf8ff")
        .on("value", (snapshot) => {
          let searchResult = [];
          snapshot.forEach((snap) => {
            searchResult.push(snap.val());
          });
          this.setState({ firs5names: searchResult });
        });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  };

  render() {
    return (
      <div className="container m1">
        <div className="input-group mb-3 mt-3">
          <input
            onChange={this.search}
            type="text"
            className="form-control"
            placeholder="Find or create a review..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <br />
        </div>
        <ul className="list-group" id="myList">
          {this.state.firs5names.map((name, indx) => (
            <li key={indx} className="list-group-item">
              {name["name"]}
              <Box component="fieldset" borderColor="transparent">
                <Rating
                  name="read-only"
                  value={name["rating"]}
                  readOnly
                  precision={0.5}
                />
              </Box>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
