import React, { Component } from "react";

import { ArtistCard } from "./ArtistCard";
import { MainTabs } from "../MainTabs";
import "./ArtistsPage.css";
import { LOADING, LOADING_FAILED } from "../../constants";

interface Props {
  data: any;
  error: any;
  getData: () => any;
  isFetching: boolean;
}

export class ArtistsList extends Component<Props> {
  componentDidMount() {
    const { data, getData } = this.props;

    if (!data || !data.length) {
      getData();
    }
  }

  render() {
    const { data, error, isFetching } = this.props;

    if (error) {
      return <p>{LOADING_FAILED}</p>;
    }

    if (isFetching) {
      return <p>{LOADING}</p>;
    }

    return (
      <div>
        <MainTabs />
        <ul className="card-list">
          {data &&
            data.map((item: any, id: string) => (
              <li key={id} className="card-item">
                <ArtistCard card={item} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
