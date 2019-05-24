import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

import { ArtistsList } from "./ArtistsList";
import { getArtists } from "./actions";

interface Props extends RouteComponentProps {
  artists: any;
  getArtistsList: () => any;
}

class ArtistsPage extends Component<Props> {
  render() {
    const { artists, getArtistsList, location } = this.props;

    return (
      <ArtistsList
        data={artists.data}
        error={artists.error}
        getData={getArtistsList}
        isFetching={artists.isFetching}
        location={location}
      />
    );
  }
}

const mapStateToProps = (store: any) => ({
  artists: store.artists
});

const mapDispatchToProps = (dispatch: any) => ({
  getArtistsList: () => dispatch(getArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsPage);
