import React, { Component } from "react";
import { MainTabs } from "../MainTabs";
import {RouteComponentProps} from "react-router";

interface Props extends RouteComponentProps {}

export class GenresPage extends Component<Props> {
  render() {
    return (
      <div>
        GenrePage
        <MainTabs />
      </div>
    );
  }
}
