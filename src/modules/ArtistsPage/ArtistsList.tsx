import React, { Component } from "react";
import { Row, Col } from "antd";
import { ArtistCard } from "./ArtistCard";
import { MainTabs } from "../MainTabs";
import { Loading } from "../Common/Loading";
import { LoadingFailed } from "../Common/LoadingFailed";

interface Props {
  data: any;
  error: any;
  getData: () => any;
  isFetching: boolean;
  location: any;
}

export class ArtistsList extends Component<Props> {
  componentDidMount() {
    const { data, getData } = this.props;

    if (!data || !data.length) {
      getData();
    }
  }

  render() {
    const { data, error, isFetching } = this.props;

    if (error) {
      return <LoadingFailed />;
    }

    if (isFetching) {
      return <Loading />;
    }

    return (
      <div>
        <MainTabs location={this.props.location} />
        <Row gutter={16}>
          {data &&
            data.map((item: any, id: string) => (
              <Col span={5} key={id}>
                <ArtistCard card={item} />
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}
