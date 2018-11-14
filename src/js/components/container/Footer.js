import React from "react";
import Card from "../presentational/Card";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <p className="footer-title">
              <span>© 2018 Self-Marketing</span>
            </p>
            <a href="https://vk.com/self__marketing" target="_blank">
              <Card cardKlass="footer-social-img" imgpath="images/vk.svg" />
            </a>
            <a href="https://www.instagram.com/self.marketing/" target="_blank">
              <Card
                cardKlass="footer-social-img"
                imgpath="images/instagram.svg"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
