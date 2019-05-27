import React, { Component } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "artistName",
    dataIndex: "artistName",
    key: "artistName"
  },
  {
    title: "genre",
    dataIndex: "genre",
    key: "genre"
  },
  {
    title: "country",
    dataIndex: "country",
    key: "country"
  },
  {
    title: "address",
    dataIndex: "address",
    key: "address"
  }
];

const data = [
  {
    key: "",
    artistName: "",
    genre: "",
    country: "",
    address: ""
  }
];
export class MuseumsPage extends Component {
  render() {
    return (
      <div>
        <h1>museums</h1>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
