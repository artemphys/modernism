import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

import { ArtistsList } from "./ArtistsList";
import { getArtists } from "./actions";

interface Props extends RouteComponentProps {
  artists: any;
  getArtistsList: (search?: string) => any;
}

class ArtistsPage extends Component<Props> {
  render() {
    const { artists, getArtistsList, history } = this.props;
    console.log(this.props);
    return (
      <ArtistsList
        data={artists.data}
        error={artists.error}
        getData={getArtistsList}
        isFetching={artists.isFetching}
        history={history}
      />
    );
  }
}

const mapStateToProps = (store: any) => ({
  artists: store.artists
});

const mapDispatchToProps = (dispatch: any) => ({
  getArtistsList: (search?: string) => dispatch(getArtists(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsPage);
