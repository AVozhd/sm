import React from 'react';
import $ from 'jquery';

export default class Doplogo extends React.Component {
  constructor() {
    super();
    this.state = {
      hide: 'hidden'
    };
  }

  componentDidMount() {
    $(window).on('scroll', () => {
      if(afterSection1(this.props.windowDimensions.height)) {
        this.setState({
          hide: ''
        });
      } else {
        this.setState({
          hide: 'hidden'
        });
      }
    });
  }

  render() {
    return(
      <img className={`doplogo ${this.state.hide}`} src='images/logoblue.png' />
    )
  }
}

const afterSection1 = (viewportHeight) => {
  return $(window).scrollTop() > viewportHeight;
};
