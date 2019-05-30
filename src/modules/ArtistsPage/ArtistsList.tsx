import React, { Component } from "react";
import { Row, Col, Input } from "antd";
import { ArtistCard } from "./ArtistCard";
import { MainTabs } from "../MainTabs";
import { Loading } from "../Common/Loading";
import { LoadingFailed } from "../Common/LoadingFailed";
import "./ArtistsPage.css";
const Search = Input.Search;

interface Props {
  data: any;
  error: any;
  getData: (text?: string) => any;
  isFetching: boolean;
  history: any;
}

export class ArtistsList extends Component<Props> {
  componentDidMount() {
    const { data, getData, history } = this.props;

    if (!data || !data.length) {
      getData(history.location.search.slice(1));
    }
  }

  handleSearch = (value: string) => {
    const { history } = this.props;

    this.props.getData(value);
    history.push({
      pathname: history.location.pathname,
      ...(value.length && { search: value })
    });
  };

  render() {
    const { data, error, isFetching, history } = this.props;

    if (error) {
      return <LoadingFailed />;
    }

    if (isFetching) {
      return <Loading />;
    }

    return (
      <div>
        <MainTabs history={history} />
        <div className="toolsContainer">
          <Row>
            <Col span={18} />
            <Col span={6}>
              <Search
                placeholder="Search"
                onSearch={this.handleSearch}
                defaultValue={history.location.search.slice(1)}
                style={{ width: 300 }}
                allowClear
              />
            </Col>
          </Row>
        </div>
        <section>
          {!data || !data.length ? (
            <span>No data available</span>
          ) : (
            <Row gutter={16}>
              {data.map((item: any, id: string) => (
                <Col span={5} key={id}>
                  <ArtistCard card={item} />
                </Col>
              ))}
            </Row>
          )}
        </section>
      </div>
    );
  }
}
