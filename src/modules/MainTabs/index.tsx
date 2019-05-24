import React, { Component } from "react";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

interface Props {
  location: any;
}

export class MainTabs extends Component<Props> {
  onChange = () => {
    let { pathname } = this.props.location;
    let url = pathname === "/artists" ? "/genres" : "/artists";
    window.location.replace(url);
  };

  getActiveTab = () =>
    this.props.location.pathname === "/artists" ? "1" : "2";

  render() {
    return (
      <Tabs onChange={this.onChange} activeKey={this.getActiveTab()}>
        <TabPane tab="Artists" key="1" />
        <TabPane tab="Genres" key="2" />
      </Tabs>
    );
  }
}
