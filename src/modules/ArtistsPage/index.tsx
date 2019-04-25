import React, { Component } from "react";
import { ArtistCard } from "./ArtistCard";

const DATA = [
  {
    id: 1,
    name: "Europe's famous artist",
    imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  },
  {
    id: 2,
    name: "Spanish famous artist",
    imgUrl: "http://placeKitten.com/300/200"
  }
];

export class ArtistList extends Component {
  render() {
    return (
      <div>
        <ul>
          {DATA.map((item, id) => (
            <li key={id}>
              <ArtistCard card={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
