import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

interface Props extends RouteComponentProps {}

export class HomePage extends Component<Props> {
  render() {
    return (
      <div>
        HomePage
        <Tabs
          defaultActiveKey= "1"
        >
          <TabPane tab="Tab 1" key="1">
            {" "}
            1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            {" "}
            2
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
