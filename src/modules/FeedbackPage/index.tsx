import React, { Component } from "react";
import { Form, Select, Input, Button, List } from "antd";
import { FEEDBACK_ARTIST_DICTIONARY } from "../../mock";

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
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.setState({ feedbackList: [...this.state.feedbackList, values] });
      }
    });
  };

  // renderFeedbackItem = (item: any) => (
  //   <div className="feedbackItem">
  //     <div className="feedbackItem__header">
  //       <span>{item.username} , </span>
  //       <span>{item.email}</span>
  //     </div>
  //     <div className="feedbackItem__subtitle">{item.artist}</div>
  //     <div className="feedbackItem__body">
  //       <span>{item.message}</span>
  //     </div>
  //   </div>
  // );

  render() {
    const { getFieldDecorator } = this.props.form;
    const { feedbackList } = this.state;

    return (
      <div className="feedback-block">
        <div>
          <h1>Feedback form</h1>
          <Form onSubmit={this.handleSubmit} className="feedback-form">
            <FormItem label="Your name">
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(<Input placeholder="username" />)}
            </FormItem>
            <FormItem label="Your e-mail">
              {getFieldDecorator("email", {
                rules: [
                  { required: true, message: "Please input your E-mail!" }
                ]
              })(<Input placeholder="e-mail" />)}
            </FormItem>
            <FormItem label="Artist or museum name">
              {getFieldDecorator("artist", {
                rules: [
                  { required: true, message: "Please fill in this field" }
                ]
              })(
                <Select
                  defaultValue=".com"
                  placeholder="Please inter artist name"
                >
                  {data.map((item, i) => {
                    return (
                      <Option value={item} key={i}>
                        {item}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </FormItem>
            <FormItem label="Your message">
              {getFieldDecorator("message", {
                rules: [
                  { required: true, message: "Please, inter your feedback" }
                ]
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
          <List
            className="comment-list"
            header={`${feedbackList.length} replies`}
            itemLayout="horizontal"
            dataSource={feedbackList}
            renderItem={(item: any) => (
              <List.Item extra={<div>{item.email}</div>}>
                <List.Item.Meta
                  title={item.username}
                  description={item.artist}
                />
                {item.message}
              </List.Item>
            )}
          />
          {/*// TODO: code refactoring*/}
          {/*{feedbackList.map((item: any) => this.renderFeedbackItem(item))}*/}
        </div>
      </div>
    );
  }
}

const AddFeedbackForm = Form.create({ name: "feedback_form" })(FeedbackForm);

export default AddFeedbackForm;
