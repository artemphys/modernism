import React, { Component } from "react";
import { Form, Select, Input, Button, List } from "antd";
import { FEEDBACK_ARTIST_DICTIONARY } from "../../mock";

import "./FeedbackPage.css";
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
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.setState({ feedbackList: [...this.state.feedbackList, values] });
      }
    });
  };

  renderFeedbackItem = ({
    username,
    email,
    artist,
    message
  }: {
    username: string;
    email: string;
    artist: string;
    message: string;
  }) => (
    <div className="feedbackItem">
      <div className="feedbackItem__header">
        <span>{username}</span>
        <span>{email}</span>
      </div>
      <div className="feedbackItem__subtitle">{artist}</div>
      <div className="feedbackItem__body">
        <span>{message}</span>
      </div>
    </div>
  );

  render() {
    const { getFieldDecorator } = this.props.form;
    const { feedbackList } = this.state;

    return (
      <div className="feedback-block">
        <div>
          <h1>Feedback form</h1>
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
        <div>
          <h1>Thanks for your information</h1>
          <div className="comment-list">
            {`${feedbackList.length} replies`}
            {feedbackList.map(this.renderFeedbackItem)}
          </div>
        </div>
      </div>
    );
  }
}

const AddFeedbackForm = Form.create({ name: "feedback_form" })(FeedbackForm);

export default AddFeedbackForm;
