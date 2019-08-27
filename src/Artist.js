import React from 'react'
import './Artist.css'


const Artist = ({ artist }) => {
    if(!artist) return null;
    const {images, name, followers, genres } = artist;

    return(
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(', ')}</p>
            <img className="artist-image" src={images[0] && images[0].url} alt={name}/>
        </div>
    )
}

export default Artist