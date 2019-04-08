import React, { Component } from "react";
import { Tabs } from "antd";
import ReactDOM from "react-dom";

const TabPane = Tabs.TabPane;


export default class TabPanel extends Component {
  state = {
    activeTab: '1'
  };
  changeTab = activeKey => {
    console.log(activeKey);
    this.setState({
      activeTab: activeKey
    })
  }

  render() {
    return (
      <Tabs activeKey={this.state.activeTab} onChange={this.changeTab}>
        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
      </Tabs>
    );
  }
}

const tabsWrapper = document.getElementById('root');
ReactDOM.render(<Tabs />, tabsWrapper);