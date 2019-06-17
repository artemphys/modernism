import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import { CommentsList } from "./Comments";
import { Avatar, Tag, Icon, Input, Col, Row, Collapse, Carousel } from "antd";
import { getArtist } from "./actions";
import { Loading } from "../../Common/Loading";
import { LoadingFailed } from "../../Common/LoadingFailed";

import "./ArtistPage.css";

const Panel = Collapse.Panel;
const panelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: "hidden"
};

interface Props extends RouteComponentProps {
  artist: any;
  getArtistPage: () => any;
}

class ArtistPage extends Component<Props> {
  state = {
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    inputVisible: false,
    inputValue: ""
  };

  componentDidMount() {
    this.props.getArtistPage();
  }

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
    const { artist } = this.props;

    if (!artist.data) {
      return null;
    }

    if (artist.error) {
      return <LoadingFailed />;
    }

    if (artist.isFetching) {
      return <Loading />;
    }

    const { id, coverImgUrl, description, gallery, comments } = artist.data;

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
                  src={coverImgUrl}
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
                  <Panel header={id} key="1" style={panelStyle}>
                    <p className="artistDescription"> {description}</p>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </section>
          <section className="blockBackground">
            <Row gutter={16}>
              <Col span={16}>
                <CommentsList data={comments} />
              </Col>
              <Col span={8}>
                <div className="gallery">
                  <Carousel autoplay>
                    {gallery.map((item: any, id: any) => (
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

const mapStateToProps = (store: any) => ({
  artist: store.artist
});

const mapDispatchToProps = (dispatch: any) => ({
  getArtistPage: () => dispatch(getArtist())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage);
