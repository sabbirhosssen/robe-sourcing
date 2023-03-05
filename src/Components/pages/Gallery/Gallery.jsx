import React from "react";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallary</title>
        <meta name="description" content="Shop our latest products now" />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <h2> Write the english laguage in Gallery</h2>
    </>
  );
};

export default Gallery;
