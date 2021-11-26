import React, { useEffect, useState } from "react";

function AlbumDetail ({ album }) {
    // const albumId = album.id
    let [albumId, setAlbumId] = useState(album.id)
    let [pics, setPics] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    //       .then((response) => response.json())
    //       .then(setPics)
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
          .then((response) => response.json())
          .then(setPics)
          .catch((error) => {
            console.log(error);
          });
      }, [albumId]);

    let mappedPics;
    if (pics){
        mappedPics = pics.map(pic => {
            return (
                <div key={pic.id}>
        <p>{pic.title}</p>
        <img src={pic.url} alt={pic.title} />
        </div>
        ) })
    }

    return (
        <div key={album.id}>
            <h2 onClick={() => {
                setIsClicked(true)
                setAlbumId(album.id)
                }}>{album.title}</h2>
            <p>{pics.title}</p>
            <p>{isClicked ? mappedPics.slice(0, 10) : null}</p>
        </div>
    )
}

export default AlbumDetail;