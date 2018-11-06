import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeChartType } from '../store/actions';


class MainComponent extends React.Component {
  render() {
    return(
      <div className="container">
        <h1>
          Hello, world!
          YaY!
        </h1>
      </div>
    )
  }
}

MainComponent.propTypes = {};

export default connect((state => ({})), (dispatch => ({})))(MainComponent);
