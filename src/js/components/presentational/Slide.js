import React from 'react';

export default class Slide extends React.Component {
  render() {
    const {imgpath, active, containerHeight} = this.props;
    return(
      <div className={`carousel-item ${active ? active : null}`}>
        <img className="d-block"
             style={{height: containerHeight/3, width: containerHeight/3}}
             src={imgpath} />
      </div>
    )
  }
}
