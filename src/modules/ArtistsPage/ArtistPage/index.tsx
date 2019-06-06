import React, { Component } from "react";
import { Avatar, Tag, Icon, Tooltip, Input, Col, Row } from "antd";
import { GET_ARTIST_DATA } from "../../../mock";

import "./ArtistPage.css";

const data = GET_ARTIST_DATA;

interface props {
  data: any;
}

export class ArtistPage extends Component<props> {
  state = {
    tags: ["Unremovable", "Tag 2", "Tag 3"],
    inputVisible: false,
    inputValue: ""
  };

  componentDidMount() {
    const { data } = this.props;

    // if (!data || !data.length) {
    //   getArtistsList(history.location.search.slice(1));
    // }
  }

  handleClose = (removedTag: any) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);

    this.setState({ tags });
  };

  showInput = () => {
    this.setState(
      { inputVisible: true }
      // () => this.input.focus());
    );
  };

  handleInputChange = (e: any) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;

    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ""
    });
  };

  //saveInputRef = (input: any) => (this.input = input);

  render() {
    const { tags, inputVisible, inputValue } = this.state;

    return (
      <div>
        <div className="tags-block">
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag
                key={tag}
                closable={index !== 0}
                onClose={() => this.handleClose(tag)}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          })}
          {inputVisible && (
            <Input
              //ref={this.saveInputRef}
              type="text"
              size="small"
              style={{ width: 78 }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag
              onClick={this.showInput}
              style={{ background: "#fff", borderStyle: "dashed" }}
            >
              <Icon type="plus" /> New Tag
            </Tag>
          )}
        </div>

        <Avatar
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"
          size={128}
          shape="square"
          style={{ float: "left" }}
        />

        <div className="description">
          <h1>Vincent Willem van Gogh</h1>
          <p>
            Vincent Willem van Gogh ( 30 March 1853 – 29 July 1890) was a Dutch
            post-impressionist painter who is among the most famous and
            influential figures in the history of Western art. In just over a
            decade he created about 2,100 artworks, including around 860 oil
            paintings, most of them in the last two years of his life. They
            include landscapes, still lifes, portraits and self-portraits, and
            are characterised by bold colours and dramatic, impulsive and
            expressive brushwork that contributed to the foundations of modern
            art. Born into an upper-middle-class family, Van Gogh drew as a
            child and was serious, quiet and thoughtful. As a young man he
            worked as an art dealer, often travelling, but became depressed
            after he was transferred to London. He turned to religion and spent
            time as a Protestant missionary in southern Belgium. He drifted in
            ill health and solitude before taking up painting in 1881, having
            moved back home with his parents. His younger brother Theo supported
            him financially, and the two kept up a long correspondence by
            letter. In 1886, he moved to Paris, where he met members of the
            avant-garde, including Émile Bernard and Paul Gauguin, who were
            reacting against the Impressionist sensibility. As his work
            developed he created a new approach to still lifes and local
            landscapes. His paintings grew brighter in colour as he developed a
            style that became fully realised. His subject matter began to
            include series of olive trees, wheat fields and sunflowers. Van Gogh
            suffered from psychotic episodes and delusions and though he worried
            about his mental stability, he often neglected his physical health,
            did not eat properly and drank heavily. His friendship with Gauguin
            ended after a confrontation with a razor when, in a rage, he severed
            part of his own left ear. He spent time in psychiatric hospitals,
            including a period at Saint-Rémy. After he discharged himself and
            moved to the Auberge Ravoux near Paris, he came under the care of
            the homeopathic doctor Paul Gachet. His depression continued and on
            27 July 1890, Van Gogh shot himself in the chest with a Lefaucheux
            revolver. He became famous after his suicide, and exists in the
            public imagination as the quintessential misunderstood genius. His
            reputation began to grow in the early 20th century as elements of
            his painting style came to be incorporated by the Fauves and German
            Expressionists. He attained widespread critical, commercial and
            popular success over the ensuing decades, and is remembered as an
            important but tragic painter, whose troubled personality typifies
            the romantic ideal of the tortured artist. Today, Van Gogh's works
            are among the world's most expensive paintings to have ever sold at
            auction, and his legacy is honoured by a museum in his name, the Van
            Gogh Museum in Amsterdam, which holds the world's largest collection
            of his paintings and drawings.
          </p>
        </div>

        <div className="images-gallery">
          <h1>Images gallery</h1>
          <Row gutter={16}>
            <Col span={4}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/46/Vincent_Willem_van_Gogh_127.jpg"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={4}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Portrait_of_Dr._Gachet.jpg"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={4}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Vincent_Van_Gogh_-_Wheatfield_with_Crows.jpg"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
