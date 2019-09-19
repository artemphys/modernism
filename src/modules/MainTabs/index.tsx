import React, { Component } from "react";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

const TABS = ["/artists", "/genres", "/events"];

interface Props {
  history: any;
}

export class MainTabs extends Component<Props> {
  onChange = (activeKey: any) => this.props.history.push(TABS[activeKey - 1]);

  getActiveTab = () => {
    let { pathname } = this.props.history.location;
    let activeTab = TABS.indexOf(pathname);
    return (activeTab + 1).toString();
  };

  render() {
    return (
      <Tabs onChange={this.onChange} activeKey={this.getActiveTab()}>
        <TabPane tab="Artists" key="1" />
        <TabPane tab="Genres" key="2" />
        <TabPane tab="Events" key="3" />
      </Tabs>
    );
  }
}
