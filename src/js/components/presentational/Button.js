import React from 'react';

const Button = ({ btntext, btnclass }) => {
  return(
    <a href="#" role="button" className={`btn btn-primary btn-lg btn-block ${btnclass}`}>
      {btntext}
    </a>
  )
};

export default Button;
