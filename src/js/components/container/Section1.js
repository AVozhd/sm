import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Section1 extends React.Component {
  render() {
    return(
      <section id="topSection"
               className="cover-image"
               style={{height: this.props.windowDimensions.height, width: this.props.windowDimensions.width}}>
        <div className="topsection-view">
          <div className="container topsection-container">
            <h1>
              Администратор в Instagram
            </h1>
          </div>
        </div>
      </section>
    )
  }
}

Section1.propTypes = {
  windowDimensions: PropTypes.object
};

export default connect((state => ({
  windowDimensions: state.viewport.dimensions
})), (dispatch => ({})))(Section1);
