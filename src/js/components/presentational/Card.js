import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCardDim } from '../../store/actions';
import $ from 'jquery';

class Card extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
          dimensions: {
            height: 0,
            width: 0
          }
        };
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    onImgLoad({target: img}) {
        this.props.cardsDimensions.height.push($(img).height());
        this.props.cardsDimensions.width.push($(img).width());
        let min = Math.min( ...this.props.cardsDimensions.height );
        let max = Math.max( ...this.props.cardsDimensions.width );
        this.setState({
          dimensions:{
            height: min,
            width: max
          }
        });
    }
    render() {
        const {imgpath, cardKlass, containerKlass, titleKlass, tekstKlass} = this.props;
        const {width, height} = this.state.dimensions;

        return (
          <div className={containerKlass}>
            <img onLoad={this.onImgLoad}
                     className={`section2-card-img ${cardKlass}`}
                     style={this.state.dimensions.height === 0 ? null : { height: this.state.dimensions.height, width: this.state.dimensions.width }}
                     src={imgpath} />
            <h3 className={`section2-card-title ${titleKlass}`}>
              {this.props.title}
            </h3>
            <p className={tekstKlass}>
              {this.props.tekst}
            </p>
          </div>
        );
    }
}

Card.propTypes = {
  cardsDimensions: PropTypes.object,
  getCardDim: PropTypes.func
};

export default connect((state => ({
  cardsDimensions: state.cards.dimensions
})), (dispatch => ({
  getCardDim: bindActionCreators(getCardDim, dispatch)
})))(Card);
