import React, { Component } from "react";
import {
  Avatar,
  Tag,
  Icon,
  Input,
  Col,
  Row,
  Collapse,
  Carousel
} from "antd";
import {
  GET_ARTIST_DATA_COVERIMGURL,
  GET_ARTIST_DATA_DESCRIPTION,
  GET_ARTIST_DATA_GALLERY,
  GET_ARTIST_DATA_ID
} from "../../../mock";

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
    inputValue: ""
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

  render() {
    const { tags, inputVisible, inputValue } = this.state;

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
                  src={GET_ARTIST_DATA_COVERIMGURL}
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
                  <Panel header={GET_ARTIST_DATA_ID} key="1" style={panelStyle}>
                    <p> {GET_ARTIST_DATA_DESCRIPTION}</p>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </section>
          <section className="blockBackground">
            <div className="gallery">
              <h1>Images gallery</h1>
              <Carousel autoplay>
                {GET_ARTIST_DATA_GALLERY.map((item, id) => (
                  <div key={id} className="galleryItem">
                    <img src={item} style={{ width: "100%" }} />
                  </div>
                ))}
              </Carousel>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
