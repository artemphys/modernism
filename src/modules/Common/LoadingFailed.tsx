import React, { Component } from "react";
import { LOADING_FAILED } from "../../constants";

export class LoadingFailed extends Component {
  render() {
    return (
      <div>
        <h1>{LOADING_FAILED}</h1>
      </div>
    );
  }
}
