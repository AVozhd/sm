import React from 'react';
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setWindowDimensions } from '../store/actions';
import PropTypes from 'prop-types';
import Section1 from './container/Section1';
import Section2 from './container/Section2';
import Section3 from './container/Section3';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props.setWindowDimensions(getWindowDimensions());
    window.addEventListener('resize', () => {
      this.props.setWindowDimensions(getWindowDimensions());
    });
  }

  render() {
    return(
      <React.Fragment>
        <Section1 />
        <Section2 />
        <Section3 />
      </React.Fragment>
    )
  }
}

const getWindowDimensions = () => {
  return {
    width: $( window ).width(),
    height: $( window ).height()
  }
};

MainComponent.propTypes = {
  windowDimensions: PropTypes.object,
  setWindowDimensions: PropTypes.func
};

export default connect((state => ({
  windowDimensions: state.viewport.dimensions
})), (dispatch => ({
  setWindowDimensions: bindActionCreators(setWindowDimensions, dispatch)
})))(MainComponent);
