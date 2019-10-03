import React, { Component } from "react";
import { Card, Typography } from "antd";
import "./EventCard.css";

const { Title, Paragraph } = Typography;
interface Props {
  item: {
    id: any;
    name: any;
    imgUrl: any;
    museumAdress: any;
    eventDates: any;
    isCharge: any;
  };
}
export class EventCard extends Component<Props> {
  render() {
    const {
      name,
      imgUrl,
      museumAdress,
      eventDates,
      isCharge
    } = this.props.item;
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
        <Paragraph>{(isCharge) ? "Free" : "Paid"}</Paragraph>
      </Card>
    );
  }
}
