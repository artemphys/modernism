import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import { getMuseums } from "./actions";
import { RouteComponentProps } from "react-router";

import { MUSEUM_TABLE_COLUMNS } from "../../mock";
import { LoadingFailed } from "../Common/LoadingFailed";
import { Loading } from "../Common/Loading";

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
