import React, { Component } from "react";
import firebase from "../firebase/firebase";

class SearchBar extends Component {
  render() {
    const search = () => {
      const db = firebase.database();

      let name = "firebase_google_com";

      db.ref("subjects/" + name).set({
        name: "firebase.google.com",
        rating: 3.1,
        reviews: [
          {
            who: "MAC_Adress_1",
            message: "Very bad!",
            picture: [
              { picture: "url://to_fire_store_db" },
              { picture: "url://to_fire_store_db" },
            ],
          },
          {
            who: "MAC_Adress_2",
            message: "Very bad!",
            picture: [
              { picture: "url://to_fire_store_db" },
              { picture: "url://to_fire_store_db" },
            ],
          },
        ],
      });
    };

    return (
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
      </div>
    );
  }
}

export default SearchBar;
