import React, { Component } from 'react'
import './Tracks.css'

class Tracks extends Component {
    state = {playing: false, audio: null, playingPreviewUrl: null};

    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);

        if(!this.state.playing){
            audio.play();
            this.setState({playing: true, audio:audio, playingPreviewUrl: previewUrl})
        }else{
            this.state.audio.pause();
             if(this.state.playingPreviewUrl === previewUrl){
                 this.setState({playing:false})
                }else{
                    audio.play()
                    this.setState({ audio, playingPreviewUrl: previewUrl })
             }
        }
    }

    render() {
        const {tracks} = this.props
        return (
            <div>
                {
                    tracks.map(track => {
                        const {id, name, album, preview_url} = track;
                        return (
                            <div className="track-div" key={id} onClick={this.playAudio(preview_url)}>
                                <img src={album.images[0].url} alt={name} />
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;