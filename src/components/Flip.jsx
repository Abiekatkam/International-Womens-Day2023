import React, { useState, useEffect } from "react";

const Flip = ({ data, reverse }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [paragraphUrl, setParagraphUrl] = useState("");

  const images = [...data.imageData];

  const paragraph = [...data.paragraphData];

  useEffect(() => {
    const randomImageIndex = Math.floor(Math.random() * images.length);

    const randomParaIndex = Math.floor(Math.random() * paragraph.length);

    setImageUrl(images[randomImageIndex]);

    setParagraphUrl(paragraph[randomParaIndex]);
  }, []);
  return (
    <div className="flip__container">
      <div className="flip__container-content">
        <img
          src={imageUrl}
          alt="radmon"
          className="flip__container-content__image"
        />
        <h1 className="flip__container-content__title">{data.title}</h1>
        <p className="flip__container-content__paragraph">{paragraphUrl}</p>
      </div>
    </div>
  );
};

export default Flip;
