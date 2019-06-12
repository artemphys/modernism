import React, { Component } from "react";

import { Comment, List } from "antd";
import { ARTIST_DATA } from "../../../../mock";

export class ArtistComments extends Component {
  render() {
    return (
      <List
        className="comment-list"
        header={`${ARTIST_DATA.comments.length} replies`}
        itemLayout="horizontal"
        dataSource={ARTIST_DATA.comments}
        renderItem={(item: any) => (
          <li>
            <Comment author={item.author} content={item.content} />
          </li>
        )}
      />
    );
  }
}
