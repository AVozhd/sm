import React from 'react';

const Slide = ({imgpath, active, containerHeight, tekstKlass, titleKlass, title, tekst}) => {
  return(
    <div className={`carousel-item ${active ? active : ''}`}>
      {imgpath ?
        <img className="d-block img-center"
           style={{height: containerHeight/3, width: containerHeight/3}}
           src={imgpath} />
        : null}
      {title ?
        <h3 className={titleKlass ? titleKlass : ''}>
          {title}
        </h3>
        : null}
      {tekst ?
        <p className={tekstKlass ? tekstKlass : ''}>
          {tekst}
        </p>
        : null}
    </div>
  )
};

export default Slide;

/*
export default class Slide extends React.Component {
  render() {
    const {imgpath, active, containerHeight, tekstKlass, titleKlass, title, tekst} = this.props;
    return(
      <div className={`carousel-item ${active ? active : ''}`}>
        {imgpath ?
          <img className="d-block img-center"
             style={{height: containerHeight/3, width: containerHeight/3}}
             src={imgpath} />
          : null}
        {title ?
          <h3 className={titleKlass ? titleKlass : ''}>
            {title}
          </h3>
          : null}
        {tekst ?
          <p className={tekstKlass ? tekstKlass : ''}>
            {tekst}
          </p>
          : null}
      </div>
    )
  }
}
*/
