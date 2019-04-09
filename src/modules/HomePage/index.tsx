import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

interface Props extends RouteComponentProps {}
export default class TabPanel extends Component {
  state = {
    activeTab: "1"
  };
  // handleTabClick = key => {
  //   this.props.history.push('/${key}')
  //   browserHistory.push('/${key}');
  // }

  changeTab = (activeKey: any) => {
    console.log(activeKey);
    this.setState({
      activeTab: activeKey
    });
  };
  // this.state.setState({})

  render() {
    return (
      <Tabs
        type="card"
        activeKey={this.state.activeTab}
        onChange={this.changeTab}
        //onTabClick ={this.changeTab}
      >
        <TabPane tab="Tab 1" key="1">
          {" "}
          1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          {" "}
          2
        </TabPane>
        {/*this.state.changeTab() === -1 ? <div>1</div> : <div>2</div>*/}
        {/*<p>{this.state.activeTab}</p>*/}
      </Tabs>
    );
  }
}

export class HomePage extends Component<Props> {
  render() {
    return (
      <div>
        HomePage
        <TabPanel />
      </div>
    );
  }
}
