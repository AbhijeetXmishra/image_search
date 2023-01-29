import React, { useEffect, useState } from "react";
import axios from "axios";

import "../Component.css";
import Images from "../Images";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading";

function DefaultImage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = () =>{
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=9`
      )
      .then((res) => setImages([...images, ...res.data]));
  }

  return (
    <InfiniteScroll
    dataLength={images.length}
    next={fetchImage}
    hasMore={true}
    loader={<Loading />}
    >
      <div className="dfltImage">
        {images.map((image, i) => (
          <Images url={image.urls.thumb} key={i} />
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default DefaultImage;
