
import React, { useState, useEffect} from 'react';
import Photo from "./Photo";
import apiKey from "../config";
import { useParams } from "react-router-dom";


function PhotoContainer(props) {
    // const [ loading, setLoading]  = React.useState(null);
    const [ data, setData]  = useState(false);
    let params = useParams();

    let fetchTerm = params.keyword ? params.keyword: props.data;

    useEffect(() => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${fetchTerm}&per_page=24&format=json&nojsoncallback=1`)
        .then(results => results.json())
        .then (data => {
            let photos = data.photos.photo.map(photo => (
                <Photo
                    photo ={photo}
                    key={photo.id}
                 /> )
                 
        )
        setData(photos)        
    }
    )}, [fetchTerm]);


    return (
        <div className="photo-container">
            <h2>{ fetchTerm }</h2>
            <ul>{ data }</ul>
        </div>

    );
}

    // const response = props.data;
    // let photos = response.map((photo) => (
    //     <Photo
    //         server={photo.server}
    //         secret={photo.secret}
    //         id={photo.id}
    //         key={photo.id}
    //         title={photo.title}
    //      />   
    // ));
   



export default PhotoContainer;