import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Card } from 'antd';

const { Meta } = Card;

export class ArtistCard  extends Component {
  render () {
    return <Card
      hoverable
      cover={
        <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
             style={{ width: 240 }}
        />}
    >
      <Meta
        title="Europe Street beat"
        description="www.instagram.com"
      />
    </Card>
  }
}

const CardWrapper = document.getElementById('root');
    ReactDOM.render(<ArtistCard />, CardWrapper);