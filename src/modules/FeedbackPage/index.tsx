import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as R from "ramda";
import { Form, Select, Input, Button, Avatar, Row, Col } from "antd";
import { FEEDBACK_ARTIST_DICTIONARY } from "../../mock";
import {
  ARTIST_NAME_LABEL,
  ARTIST_NAME_PLACEHOLDER,
  ARTIST_NAME_PROPERTY,
  ARTIST_NAME_VALIDATION_TEXT,
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  EMAIL_PROPERTY,
  EMAIL_VALIDATION_TEXT,
  MESSAGE_LABEL,
  MESSAGE_PROPERTY,
  MESSAGE_VALIDATION_TEXT,
  USER_NAME_LABEL,
  USER_NAME_PLACEHOLDER,
  USER_NAME_PROPERTY,
  USER_NAME_VALIDATION_TEXT
} from "../../constants/FormConstants";

import "./FeedbackPage.css";

interface Props {
  form: any;
  data: any;
}

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;
const data = FEEDBACK_ARTIST_DICTIONARY;

class FeedbackForm extends Component<Props> {
  state = {
    feedbackList: []
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    const { validateFields, resetFields } = this.props.form;
    validateFields((err: any, values: any) => {
      if (!err) {
        this.setState({
          feedbackList: [
            ...this.state.feedbackList,
            { ...values, color: this.getBackground() }
          ]
        });
        resetFields();
      }
    });
  };

  getBackground = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  renderFeedbackItem = ({
    username,
    email,
    artist,
    message,
    color
  }: {
    username: string;
    email: string;
    artist: string;
    message: string;
    color: string;
  }) => (
    <div className="feedbackItem">
      <div className="feedbackItem__user">
        <Avatar
          className="feedbackItem__avatar"
          size={64}
          style={{ color: "#f56a00", backgroundColor: color }}
        >
          {username[0].toUpperCase()}
        </Avatar>
        <p>{username}</p>
        <p>{email}</p>
      </div>
      <div className="feedbackItem__content">
        <div className="feedbackItem__subtitle">{artist}</div>
        <Button
          type="primary"
          ghost
          shape="circle"
          icon="close"
          className="feedbackItem__delete"
        />
        <div className="feedbackItem__content-text">{message}</div>
        <Link to={`/artists`}>Show all</Link>
      </div>
    </div>
  );

  createRows = (feedbackList: Array<any>) => R.splitEvery(4, feedbackList);

  render() {
    const { getFieldDecorator } = this.props.form;
    const { feedbackList } = this.state;
    return (
      <div className="feedback-page">
        <div className="feedback-form-block">
          <p className="feedback-form-header">
            Thank you for being our guest. Your feedback is important to us. If
            you have a little time, please leave a review on museums or art
            galleries, to help other people in decision.
          </p>
          <Form onSubmit={this.handleSubmit} className="feedback-form">
            <FormItem label={USER_NAME_LABEL}>
              {getFieldDecorator(USER_NAME_PROPERTY, {
                rules: [{ required: true, message: USER_NAME_VALIDATION_TEXT }]
              })(<Input placeholder={USER_NAME_PLACEHOLDER} />)}
            </FormItem>
            <FormItem label={EMAIL_LABEL}>
              {getFieldDecorator(EMAIL_PROPERTY, {
                rules: [{ required: true, message: EMAIL_VALIDATION_TEXT }]
              })(<Input placeholder={EMAIL_PLACEHOLDER} />)}
            </FormItem>
            <FormItem label={ARTIST_NAME_LABEL}>
              {getFieldDecorator(ARTIST_NAME_PROPERTY, {
                rules: [
                  { required: true, message: ARTIST_NAME_VALIDATION_TEXT }
                ]
              })(
                <Select
                  defaultValue=".com"
                  placeholder={ARTIST_NAME_PLACEHOLDER}
                >
                  {data.map((item, i) => {
                    return (
                      <Option value={item} key={`${i}_${item}`}>
                        {item}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </FormItem>
            <FormItem label={MESSAGE_LABEL}>
              {getFieldDecorator(MESSAGE_PROPERTY, {
                rules: [{ required: true, message: MESSAGE_VALIDATION_TEXT }]
              })(<TextArea rows={4} />)}
            </FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Send feedback
            </Button>
          </Form>
        </div>
        <div className="feedback-list-block">
          <h1 className="feedback-list-header">{`The most actual feedbacks ${
            feedbackList.length
          } replies left`}</h1>
          <div className="feedback-list">
            {[...this.createRows(feedbackList)].map(
              (row: Array<any>, i: number) => (
                <Row gutter={16} key={i}>
                  {row.map((item: any, i: number) => (
                    <Col span={6} key={i}>
                      {this.renderFeedbackItem(item)}
                    </Col>
                  ))}
                </Row>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

const FeedbackPage = Form.create({ name: "feedback_form" })(FeedbackForm);

export default FeedbackPage;
