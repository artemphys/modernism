import React, { Component } from "react";
import { Avatar, Button, Card, Typography } from "antd";

const { Paragraph } = Typography;

interface Props {
  feedbackList: {
    username: any;
    email: any;
    artist: any;
    message: any;
    color: any;
  };
}

export class FeedbackItem extends Component<Props> {

  render() {
    const { artist, color, username, email, message } = this.props.feedbackList;

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
        />
      </Card>
    );
  }
}
