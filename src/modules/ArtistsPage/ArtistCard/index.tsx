import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

const { Meta } = Card;

interface Props {
  card: {
    id: string;
    name: string;
    imgUrl: string;
  };
}

export class ArtistCard extends Component<Props> {
  render() {
    const { id, name, imgUrl } = this.props.card;
    return (
      <Card hoverable cover={<img src={imgUrl} style={{ width: 240 }} />}>
        <Meta title={name} />
        <Link to={`/artists/${id}`}>More...</Link>
      </Card>
    );
  }
}
