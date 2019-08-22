import React, { Component, Fragment } from "react";
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
  state = {
    visible: false
  };

  handleChangeMessage = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const {
      data: { artist, color, username, email, id, message },
      onDelete
    } = this.props;
    const { visible } = this.state;

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
        <div>
          {message.length > 160 ? (
            <Fragment>
              <Paragraph>
                {visible ? message : `${message.slice(0, 160)}...`}
              </Paragraph>
              <a href="#" onClick={this.handleChangeMessage}>
                {!visible ? "Show all" : "Hide"}
              </a>
            </Fragment>
          ) : (
            <Paragraph>{message}</Paragraph>
          )}
        </div>
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
