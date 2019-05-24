import React, { Component } from "react";
import { LOADING } from "../../constants";
import { Icon, Spin } from "antd";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export class Loading extends Component {
  render() {
    return (
      <div>
        <h1>{LOADING}</h1>
        <Spin size="large" indicator={antIcon} />
      </div>
    );
  }
}
