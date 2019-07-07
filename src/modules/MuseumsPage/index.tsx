import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { getMuseums } from "./actions";
import { RouteComponentProps } from "react-router";

import { LoadingFailed } from "../Common/LoadingFailed";
import { Loading } from "../Common/Loading";
const MUSEUM_TABLE_COLUMNS = [
  {
    title: "artistName",
    dataIndex: "artistName",
    key: "artistName",
    render: (text: any, row: any) => (
      <Link to={`/artists/${row.artistId}`}>{text}</Link>
    )
  },
  {
    title: "genre",
    dataIndex: "genre",
    key: "genre",
    render: (text: any, row: any) => (
      <Link to={`/genres/${row.genreId}`}>{text}</Link>
    )
  },
  {
    title: "country",
    dataIndex: "country",
    key: "country"
  },
  {
    title: "address",
    dataIndex: "address",
    key: "address",
    render: (text: any, row: any) => (
      <Link to={`/museums/${row.museumId}`}>{text}</Link>
    )
  }
];

interface Props extends RouteComponentProps {
  getMuseumsTable: () => any;
  museums: any;
}

class MuseumsPage extends Component<Props> {
  componentDidMount() {
    this.props.getMuseumsTable();
  }

  render() {
    const { museums } = this.props;

    if (museums.error) {
      return <LoadingFailed />;
    }

    if (museums.isFetching) {
      return <Loading />;
    }

    return (
      <div>
        <h1>Museums</h1>
        <Table columns={MUSEUM_TABLE_COLUMNS} dataSource={museums.data} />
      </div>
    );
  }
}

const mapStateToProps = (store: any) => ({
  museums: store.museums
});

const mapDispatchToProps = (dispatch: any) => ({
  getMuseumsTable: () => dispatch(getMuseums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MuseumsPage);
