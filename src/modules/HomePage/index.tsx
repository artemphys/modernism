import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {}

export class HomePage extends Component<Props> {
  render() {
    return <div>HomePage</div>;
  }
}
