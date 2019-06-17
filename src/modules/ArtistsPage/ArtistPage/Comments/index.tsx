import React, { Component } from "react";
import { Comment, List } from "antd";

interface Props {
  data: any;
}

export class CommentsList extends Component<Props> {
  render() {
    const { data } = this.props;

    return (
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: any) => (
          <li>
            <Comment author={item.author} content={item.content} />
          </li>
        )}
      />
    );
  }
}
