import React from "react";
import Card from "../presentational/Card";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <Card
              containerKlass="card col-lg-3 col-md-3 col-3 no-bg"
              imgpath="images/facebook.svg"
            />
            <Card
              containerKlass="card col-lg-3 col-md-3 col-3 no-bg"
              imgpath="images/instagram.svg"
            />
            <Card
              containerKlass="card col-lg-3 col-md-3 col-3 no-bg"
              imgpath="images/linkedin.svg"
            />
            <Card
              containerKlass="card col-lg-3 col-md-3 col-3 no-bg"
              imgpath="images/vk.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}
