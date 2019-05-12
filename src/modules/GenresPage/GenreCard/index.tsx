import React, { Component } from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

interface Props {
  item: {
    id: string;
    name: string;
    description: string;
    imgUrl: string;
  };
}

export class GenreCard extends Component<Props> {
  render() {
    const { id, name, description, imgUrl } = this.props.item;
    return (
      <Card className="card-wrapper">
        <Meta
          title={name}
          description={description}
          avatar={<Avatar src={imgUrl} className="genre-card-image" />}
          className="card-inner"
        />
        <Link to={`/genres/${id}`}>More...</Link>
      </Card>
    );
  }
}
