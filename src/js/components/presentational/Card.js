import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCardDim } from '../../store/actions';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.ref = this.card;
      this.props.cardsDimensions.height.push(this.ref.clientHeight);
      this.props.cardsDimensions.width.push(this.ref.clientWidth);
      let min = Math.min( ...this.props.cardsDimensions.height );
      let max = Math.max( ...this.props.cardsDimensions.width );
      this.setState({
        height: min,
        width: max
      });
    }, 1)
  }

  render() {
    return(
      <div className={this.props.containerKlass}>
        <img ref={element => this.card = element}
             className={`section2-card-img ${this.props.cardKlass}`}
             style={this.state.height === 0 ? null : { height: this.state.height, width: this.state.width }}
             src={this.props.imgpath} />
        <h3 className="section2-card-title">
          {this.props.title}
        </h3>
        <p>
          {this.props.tekst}
        </p>
      </div>
    )
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
