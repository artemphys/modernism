import React, { Component } from "react";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

interface Props {
  history: any;
}

export class MainTabs extends Component<Props> {
  onChange = () => {
    let { history } = this.props;
    let url = history.location.pathname.includes("artists")
      ? "/genres"
      : "/artists";
    history.push(url);
  };

  getActiveTab = () =>
    this.props.history.location.pathname.includes("artists") ? "1" : "2";

  render() {
    console.log(this.props.history);
    return (
      <Tabs onChange={this.onChange} activeKey={this.getActiveTab()}>
        <TabPane tab="Artists" key="1" />
        <TabPane tab="Genres" key="2" />
      </Tabs>
    );
  }
}
