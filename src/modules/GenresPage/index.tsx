import React, { Component } from "react";
import { MainTabs } from "../MainTabs";
import { Row, Col } from "antd";
import { RouteComponentProps } from "react-router";
import { GenreCard } from "./GenreCard";

const DATA = [
  {
    id: "Post-Impressionism",
    name: "Post-Impressionism",
    description:
      "Postmodern art is a body of art movements that sought to contradict some aspects of modernism or some aspects that emerged or developed in its aftermath. There are several characteristics which lend art to being postmodern; these include bricolage, the use of text prominently as the central artistic element, collage, simplification, appropriation, performance art, the recycling of past styles and themes in a modern-day context, as well as the break-up of the barrier between fine and high arts and low art and popular culture...",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Vincent_van_Gogh_%281853-1890%29_-_The_Olive_Trees_%281889%29.jpg"
  },
  {
    id: "Surrealism",
    name: "Surrealism",
    description:
      "Surrealism, movement in visual art and literature, flourishing in Europe between World Wars I and II. Surrealism grew principally out of the earlier Dada movement, which before World War I produced works of anti-art that deliberately defied reason; but Surrealism’s emphasis was not on negation but on positive expression. The movement represented a reaction against what its members saw as the destruction wrought by the “rationalism” that had guided European culture and politics in the past and that had culminated in the horrors of World War I... ",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/100_4419.jpg"
  },
  {
    id: "Cubism",
    name: "Cubism",
    description:
      "Cubism, highly influential visual arts style of the 20th century that was created principally by the artists Pablo Picasso and Georges Braque in Paris between 1907 and 1914. The Cubist style emphasized the flat, two-dimensional surface of the picture plane, rejecting the traditional techniques of perspective, foreshortening, modeling, and chiaroscuro, and refuting time-honoured theories that art should imitate nature. Cubist painters were not bound to copying form, texture, colour, and space; instead, they presented a new reality in paintings that depicted radically fragmented objects...",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/1914_Gris_Le_Petit_D%C3%A9jeuner.jpg"
  }
];

interface Props extends RouteComponentProps {
  history: any;
}

export class GenresPage extends Component<Props> {
  render() {
    return (
      <div>
        <MainTabs history={this.props.history} />
        <Row gutter={16}>
          {DATA.map(item => (
            <Col span={6}>
              <GenreCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
