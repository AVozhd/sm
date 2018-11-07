import React from 'react';

const Card = ({klass, imgpath, title, tekst}) => {
  return(
    <div className={klass}>
      <img className="section2-card-img" src={imgpath} />
      <h3 className="section2-card-title">
        {title}
      </h3>
      <p>
        {tekst}
      </p>
    </div>
  )
};

export default Card;
