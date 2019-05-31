import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import { getMuseums } from "./actions";
import { RouteComponentProps } from "react-router";

import { columns } from "../../mock";

interface Props extends RouteComponentProps {
  getMuseumsTable: () => any;
  museums: any;
}

export class MuseumsPage extends Component<Props> {
  componentDidMount() {
    this.props.getMuseumsTable();
  }
  render() {
    const { museums } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>museums</h1>
        <Table columns={columns} dataSource={museums.data} />
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
