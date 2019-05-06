import React, { Component } from "react";
import { ArtistCard } from "./ArtistCard";
import "./ArtistsPage.css";

const DATA = [
  {
    id: 1,
    name: "Europe's famous artist",
    imgUrl: "https://placeKitten.com/300/150"
  },
  {
    id: 2,
    name: "Spanish famous artist",
    imgUrl: "http://placeKitten.com/300/200"
  },
  {
    id: 3,
    name: "German famous artist",
    imgUrl: "https://placeKitten.com/300/250"
  }
];

export class ArtistList extends Component {
  render() {
    return (
      <div>
        <ul className="card-list">
          {DATA.map((item, id) => (
            <li key={id} className="card-item">
              <ArtistCard card={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
