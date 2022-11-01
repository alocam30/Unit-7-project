import React from 'react';

const Photo = (props) => {
    const imgUrl = `https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}.jpg`

    return (
        <li>
            <img
            src={ imgUrl }
            alt={props.title}
            />
        </li>

    )
};

export default Photo;