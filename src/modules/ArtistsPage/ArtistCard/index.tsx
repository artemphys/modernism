import React, { Component } from "react";
import { Card } from "antd";

const { Meta } = Card;

interface Props {
  card: {
    id: number;
    name: string;
    imgUrl: string;
  };
}

export class ArtistCard extends Component<Props> {
  render() {
    const { name, imgUrl } = this.props.card;
    return (
      <Card hoverable cover={<img src={imgUrl} style={{ width: 240 }} />}>
        <Meta title={name} />
        <a href="#">More</a>
      </Card>
    );
  }
}
