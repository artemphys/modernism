import React, { Component } from "react";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

export class MainTabs extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Artists" key="1" />
        <TabPane tab="Genres" key="2" />
      </Tabs>
    );
  }
}
