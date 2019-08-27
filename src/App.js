import React, { Component } from 'react'
import Artist from './Artist'
import Tracks from './Tracks'
import Search from './Search'
import './App.css';


const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      artist: null,
      tracks: []
    }
  }

  searchArtist = (artistQuery) => {
    console.log('this.state', this.state)

    fetch(`${API_ADDRESS}/artist/${artistQuery}`) 
      .then( response => response.json() )
      .then( json => {
      
      console.log('json', json) 
    
      if(json.artists.total > 0){
        const artist = json.artists.items[0]
        console.log('artist', artist)
        this.setState({artist});

        fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
        .then(response =>  response.json())
        .then(json => this.setState({tracks: json.tracks }) )
        .catch(error => alert(error.message));
      }

    
    })
    .catch(error => alert(error.message));
}
  


  render(){
    return (
      <div className="App">
        <h1>Music Master</h1>
        <p className="text-muted text-caption">Search your favorite artist</p>
        <Search searchArtist = {this.searchArtist} />
        <Artist artist = {this.state.artist} />
        <h4> {this.state.artist && 'Albums by ' + this.state.artist.name} </h4>
        <Tracks tracks = {this.state.tracks} />
      </div>
    );
  }
}

export default App;
