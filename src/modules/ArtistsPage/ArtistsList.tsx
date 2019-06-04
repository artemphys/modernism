import React, { Component } from "react";
import { Row, Col, Input } from "antd";
import * as R from "ramda";
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

  createRows = (data: Array<any>) => R.splitEvery(4, data);

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
          <Row gutter={16}>
            <Col span={10} />
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
            <div>
              {[...this.createRows(data)].map((row: Array<any>, i: number) => (
                <Row gutter={16} key={i}>
                  {row.map((item: any, i: number) => (
                    <Col span={4} key={i}>
                      <ArtistCard card={item} />
                    </Col>
                  ))}
                </Row>
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}
