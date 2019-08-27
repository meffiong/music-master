import React, { Component } from 'react'

export default class Search extends Component {
    state = {artistQuery: ''};

    handleChange = (e) => {
        console.log('event', e.target.value);
        this.setState({artistQuery: e.target.value})
    }

    handleKeyPress = e => {
        if(e.key === 'Enter'){
            this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}
