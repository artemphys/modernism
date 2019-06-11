import React, { Component } from "react";
import {
  Avatar,
  Tag,
  Icon,
  Input,
  Col,
  Row,
  Collapse,
  Carousel,
  Comment,
  Tooltip,
  List
} from "antd";
import { ARTIST_DATA } from "../../../mock";
import moment from "moment";

import "./ArtistPage.css";

const Panel = Collapse.Panel;
const panelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: "hidden"
};

export class ArtistPage extends Component {
  state = {
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    inputVisible: false,
    inputValue: "",
    likes: 0,
    dislikes: 0,
    action: null
  };

  removeTag = (removedTag: any) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  };

  toggleTagInput = () =>
    this.setState({ inputVisible: !this.state.inputVisible });

  handleTagInputChange = (e: any) => {
    this.setState({ inputValue: e.target.value });
  };

  createTag = () => {
    const { inputValue, tags } = this.state;

    if (!inputValue) {
      return;
    }

    this.setState({
      tags: [...tags, inputValue],
      inputVisible: false,
      inputValue: ""
    });
  };

  addLike = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: "liked"
    });
  };

  addDislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: "disliked"
    });
  };

  render() {
    const {
      tags,
      inputVisible,
      inputValue,
      action,
      dislikes,
      likes
    } = this.state;

    const bottomBar = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === "liked" ? "filled" : "outlined"}
            onClick={this.addLike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === "disliked" ? "filled" : "outlined"}
            onClick={this.addDislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{dislikes}</span>
      </span>,
      <span>Reply to</span>
    ];

    return (
      <div>
        <div className="containerMain">
          <div className="tags-block">
            {tags.map(tag => (
              <Tag
                key={tag}
                closable={true}
                onClose={() => this.removeTag(tag)}
              >
                {tag}
              </Tag>
            ))}
            {inputVisible ? (
              <Input
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputValue}
                onChange={this.handleTagInputChange}
                onBlur={this.createTag}
                onPressEnter={this.createTag}
              />
            ) : (
              <Tag
                onClick={this.toggleTagInput}
                style={{ background: "#fff", borderStyle: "dashed" }}
              >
                <Icon type="plus" /> New Tag
              </Tag>
            )}
          </div>
          <section>
            <Row gutter={16}>
              <Col span={8}>
                <Avatar
                  src={ARTIST_DATA.coverImgUrl}
                  shape="square"
                  style={{ float: "left", width: "100%", height: "500px" }}
                />
              </Col>
              <Col span={16}>
                <Collapse
                  bordered={false}
                  expandIcon={({ isActive }) => (
                    <Icon type="caret-right" rotate={isActive ? 90 : 0} />
                  )}
                >
                  <Panel header={ARTIST_DATA.id} key="1" style={panelStyle}>
                    <p className="artistDescription">
                      {" "}
                      {ARTIST_DATA.description}
                    </p>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </section>
          <section className="blockBackground">
            <Row gutter={16}>
              <Col span={16}>
                <List
                  className="comment-list"
                  header={`${ARTIST_DATA.comments.length} replies`}
                  itemLayout="horizontal"
                  dataSource={ARTIST_DATA.comments}
                  renderItem={(item: any) => (
                    <li>
                      <Comment
                        actions={bottomBar}
                        author={item.author}
                        content={item.content}
                      />
                    </li>
                  )}
                />
              </Col>
              <Col span={8}>
                <div className="gallery">
                  <Carousel autoplay>
                    {ARTIST_DATA.gallery.map((item, id) => (
                      <div key={id} className="galleryItem">
                        <img src={item} style={{ width: "100%" }} />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    );
  }
}
