import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Tabs } from "antd";
import { ArtistList } from "../ArtistsPage";
const TabPane = Tabs.TabPane;


interface Props extends RouteComponentProps {}

export class HomePage extends Component<Props> {
  render() {
    return (
      <div>
        HomePage
        <Tabs defaultActiveKey="1">
          <TabPane tab="Artists" key="1">
            <ArtistList />
          </TabPane>
          <TabPane tab="Genres" key="2">
            2
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
