import React from "react";

const Button = ({ btntext, btnclass, btnlink, blank }) => {
  return (
    <a
      href={btnlink ? btnlink : "#"}
      role="button"
      target={blank ? "_blank" : "_self"}
      className={`btn btn-primary btn-lg btn-block ${btnclass}`}
    >
      {btntext}
    </a>
  );
};

export default Button;
