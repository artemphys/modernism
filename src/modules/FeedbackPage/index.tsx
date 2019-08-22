import React, { Component } from "react";
import { Form, Select, Input, Button, Typography, Modal } from "antd";
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
import { FeedbackItem } from "./FeedbackItem";

interface Props {
  form: any;
}

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;
const dictionary = FEEDBACK_ARTIST_DICTIONARY;

class FeedbackForm extends Component<Props> {
  state = {
    data: [
      {
        username: "Vasya Vasyliev",
        email: "Vas_Vasyliev@gmail.com",
        artist: dictionary[0],
        message:
          "In writing terms, it suffers from two distinct problems 1. Forcing too much information into too short a space: the result is dense sentences that the reader must spend time unpicking to understand. 2. Artspeak and jargon: it uses a lot of language particular to the discipline of art and therefore contains words and ideas that might not be understood by readers who don’t know art world language and concepts. 4. Unfinished narratives: beginning a story and not finishing it, ie stories hinted at but not told, unexplained gaps in timelines, leaps from an artist’s controversial status to sudden acceptance as establishment figure and so on."
      }
    ],
    visible: false
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    const { validateFields, resetFields } = this.props.form;

    validateFields((err: any, values: any) => {
      if (!err) {
        const color = this.getBackground();
        this.setState({
          data: [...this.state.data, { ...values, color, id: color }]
        });

        resetFields();
      }
    });
  };

  getBackground = () => {
    let letters = "0123456789ABCDEF";
    let color = ["#"];
    for (let i = 0; i < 6; i++) {
      color.push(letters[Math.floor(Math.random() * 16)]);
    }
    return color.join("");
  };

  renderFeedbackItem = (data: any) => (
    <FeedbackItem data={data} onDelete={this.deleteFeedback} />
  );

  deleteFeedback = (itemId: any) => {
    const newData = this.state.data.filter((el: any) => el.id !== itemId);
    this.setState({ data: newData });
  };

  toggleModal = () =>
    this.setState({
      visible: !this.state.visible
    });

  render() {
    const { getFieldDecorator } = this.props.form;
    const { data } = this.state;

    return (
      <div className="feedback-page">
        <div>
          <Title level={3}>
            Thank you for being our guest. Your feedback is important to us. If
            you have a little time, please leave a review on museums or art
            galleries, to help other people in decision.
          </Title>
          <Button type="primary" onClick={this.toggleModal}>
            Add feedback
          </Button>
          <Modal
            title="Feedback form"
            visible={this.state.visible}
            footer={null}
            onCancel={this.toggleModal}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormItem label={USER_NAME_LABEL}>
                {getFieldDecorator(USER_NAME_PROPERTY, {
                  rules: [
                    { required: true, message: USER_NAME_VALIDATION_TEXT }
                  ]
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
                  <Select placeholder={ARTIST_NAME_PLACEHOLDER}>
                    {dictionary.map((item, i) => (
                      <Option value={item} key={`${i}_${item}`}>
                        {item}
                      </Option>
                    ))}
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
          </Modal>
        </div>
        <div className="feedback-list-block">
          <Title level={3}>{`The most actual feedbacks ${
            data.length
          } replies left`}</Title>
          {data.map(this.renderFeedbackItem)}
        </div>
      </div>
    );
  }
}

const FeedbackPage = Form.create({ name: "feedback_form" })(FeedbackForm);

export default FeedbackPage;
