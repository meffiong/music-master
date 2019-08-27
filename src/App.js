import React, { Component } from 'react'
import Artist from './Artist'
import './App.css';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      artistQuery: '',
      artist: null,
      tracks: []
    }
  }

  handleChange = (e) => {
    console.log('event', e.target.value);
    this.setState({artistQuery: e.target.value})
  }

  
  searchArtist = () => {
    console.log('this.state', this.state)

    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`) 
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

  handleKeyPress = e => {
    if(e.key === 'Enter'){
      this.searchArtist();
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Music Master</h1>
        <input type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        <button onClick={this.searchArtist}>Search</button>
        <Artist artist = {this.state.artist} />
      </div>
    );
  }
}

export default App;
