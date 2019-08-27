import React, { Component } from 'react'
import './Tracks.css'

class Tracks extends Component {
    render() {
        const {tracks} = this.props
        return (
            <div>
                {
                    tracks.map(track => {
                        const {id, name, album} = track;
                        return (
                            <div className="track-div" key={id}>
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