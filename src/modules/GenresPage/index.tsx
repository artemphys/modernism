import React, { Component } from "react";
import { MainTabs } from "../MainTabs";
import { Row, Col } from "antd";
import { RouteComponentProps } from "react-router";
import { GenreCard } from "./GenreCard";

import { DATA } from "../../mock";

interface Props extends RouteComponentProps {
  history: any;
}

export class GenresPage extends Component<Props> {
  render() {
    return (
      <div>
        <MainTabs history={this.props.history} />
        <Row gutter={16}>
          {DATA.map(item => (
            <Col span={6}>
              <GenreCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
