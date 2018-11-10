import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slide from '../presentational/Slide';

class Section6 extends React.Component {
  render() {
    return(
      <section>
        <div className="container">
          <div id="carouselControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <Slide active="active"
                     imgpath="images/pict1.png"
                     titleKlass="text-center"
                     tekstKlass="text-center"
                     containerHeight={this.props.windowDimensions.height/2} />
              <Slide imgpath="images/pict2.png"
                     containerHeight={this.props.windowDimensions.height/2} />
              <Slide imgpath="images/pict3.png"
                     containerHeight={this.props.windowDimensions.height/2} />
            </div>
            <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

Section6.propTypes = {
  windowDimensions: PropTypes.object,
};

export default connect((state => ({
  windowDimensions: state.viewport.dimensions,
})), (dispatch => ({})))(Section6);
