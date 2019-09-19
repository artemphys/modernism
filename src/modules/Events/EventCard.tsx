import React, { Component } from "react";
import { Card, Typography } from "antd";
import { Link } from "react-router-dom";
import "./EventCard.css";

const { Title, Paragraph } = Typography;
interface Props {
  item: {
    id: any;
    name: any;
    imgUrl: any;
    museumAdress: any;
    date: any;
    eventDates: any;
  };
}
export class EventCard extends Component<Props> {
  render() {
    const { name, imgUrl, museumAdress, eventDates } = this.props.item;
    return (
      <Card
        className="img-height-control"
        hoverable
        cover={<img alt={name} src={imgUrl} />}
        size="small"
      >
        <Title level={4}>{name}</Title>
        <Paragraph>{museumAdress}</Paragraph>
        <Paragraph>
          from {eventDates[0]} till {eventDates[1]}
        </Paragraph>
      </Card>
    );
  }
}
