import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { ArtistList } from "../ArtistsPage";

interface Props extends RouteComponentProps {}

export class HomePage extends Component<Props> {
  render() {
    return (
      <div>
        HomePage
        <ArtistList />
      </div>
    );
  }
}
