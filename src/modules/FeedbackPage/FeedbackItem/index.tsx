import React, { Component } from "react";
import { Avatar, Button, Card, Typography } from "antd";

const { Paragraph } = Typography;

interface Props {
  data: {
    username: any;
    email: any;
    artist: any;
    message: any;
    color: any;
    id: any;
  };
  onDelete: any;
}

export class FeedbackItem extends Component<Props> {
  render() {
    const { artist, color, username, email, message, id } = this.props.data;
    const { onDelete } = this.props;
    return (
      <Card title={artist} className="feedback-item">
        <div className="feedback-item__user">
          <Avatar
            className="feedback-item__avatar"
            size={64}
            style={{ backgroundColor: color }}
          >
            {username[0].toUpperCase()}
          </Avatar>
          <Paragraph>{username}</Paragraph>
          <Paragraph>{email}</Paragraph>
        </div>
        <Paragraph>{message}</Paragraph>
        <Button>Show all</Button>
        <Button
          type="primary"
          ghost
          shape="circle"
          icon="close"
          className="feedback-item__delete"
          onClick={() => onDelete(id)}
        />
      </Card>
    );
  }
}
