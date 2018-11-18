import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import $ from "jquery";
import { getSlideDim } from "../../store/actions";

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.slide = React.createRef();
    this.state = {
      dimensions: {
        height: 0,
        width: 0
      }
    };
  }

  componentDidMount() {
    let slideHeight = $(this.slide.current).height();
    let slideWidth = $(this.slide.current).width();
    let iniStateSlideDim = this.props.slidesDimensions;
    iniStateSlideDim.height.push(slideHeight);
    iniStateSlideDim.width.push(slideWidth);
    this.props.getSlideDim(iniStateSlideDim);
    let maxHeight = Math.max(...this.props.slidesDimensions.height);
    let maxWidth = Math.max(...this.props.slidesDimensions.width);
    this.setState({
      dimensions: {
        height: maxHeight,
        width: maxWidth
      }
    });
  }

  render() {
    const {
      imgpath,
      tip,
      tipKlass,
      imgKlass,
      containerKlass,
      active,
      containerHeight,
      tekstKlass,
      titleKlass,
      title,
      tekst
    } = this.props;
    return (
      <div
        ref={this.slide}
        style={
          this.state.dimensions.height === 0
            ? null
            : {
                height: this.state.dimensions.height,
                width: this.state.dimensions.width
              }
        }
        className={`carousel-item ${active ? active : ""} ${
          containerKlass ? containerKlass : ""
        }`}
      >
        {imgpath ? (
          <img
            className={`d-block img-center ${imgKlass ? imgKlass : ""}`}
            style={{ height: containerHeight / 3, width: containerHeight / 3 }}
            src={imgpath}
          />
        ) : null}
        {tekst ? <p className={tekstKlass ? tekstKlass : ""}>{tekst}</p> : null}
        {title ? (
          <h1 className={titleKlass ? titleKlass : ""}>{title}</h1>
        ) : null}
        {tip ? <h3 className={tipKlass ? tipKlass : ""}>{tip}</h3> : null}
      </div>
    );
  }
}

Slide.propTypes = {
  slidesDimensions: PropTypes.object,
  getSlideDim: PropTypes.func
};

export default connect(
  state => ({
    slidesDimensions: state.slides.dimensions
  }),
  dispatch => ({
    getSlideDim: bindActionCreators(getSlideDim, dispatch)
  })
)(Slide);
