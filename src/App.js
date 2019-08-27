import React, { Component } from 'react'
import './App.css';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com/';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      artistSearch: '',
      artist: null,
      tracks: null
    }
  }

  handleChange = (e) => {
    console.log('event', e.target.value);
    this.setState({artistSearch: e.target.value})
  }

  searchArtist = () => {
    console.log('this.state', this.state)

    fetch(`${API_ADDRESS}/artist/${this.state.artistSearch}`)
      .then( (response) => response.json() )
      .then( (json) => console.log('json', json) );

      if(json.artist.total > 0){
        const artist = json.artist.items[0]
        console.log('artist', artist)
        this.setState({artist});
      }

      fetch();
  }

  handeleKeyPress = e => {
    if(e.key === 'Enter'){
      this.searchArtist();
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Music Master</h1>
        <input type="text" onChange={this.handleChange} onKeyPress={this.handeleKeyPress} />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default App;
