import React from 'react';
import Like from '../TheHeart';

const Beer = (props) => {
    console.log(props);
    return (
        <div className="one_beer">
            <h3>{props.beer.name}</h3>
            <h4>{props.beer.tagline}</h4>
            <h4>{props.beer.volume.value} {props.beer.volume.unit}</h4>
            <img src={props.beer.image_url} alt=""/>
            <Like />
        </div>
    )
}
export default Beer;