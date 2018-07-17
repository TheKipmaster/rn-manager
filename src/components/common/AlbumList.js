import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    if (this.state.albums.length > 0) {
      return this.state.albums.map(album =>
        <AlbumDetail
        key={album.title}
        album={album}
        />);
    }
    return (
      <Text style={styles.loadingStyle}>Loading...</Text>
    );
  }

  render() {
    console.log(this.state.albums);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }

}
const styles = {
  loadingStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 30
  }
};

export default AlbumList;
