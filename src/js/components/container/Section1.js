import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logo from "../presentational/Logo";
import Button from "../presentational/Button";

class Section1 extends React.Component {
  render() {
    return (
      <section
        id="topSection"
        className="cover-image"
        style={{
          height: this.props.windowDimensions.height,
          width: this.props.windowDimensions.width
        }}
      >
        <div className="topsection-view">
          <div className="container topsection-container">
            <div className="row">
              {this.props.windowDimensions.width > 991 ? (
                <div className="col-lg-6 image-me-container">
                  <img className="image-me" src="images/me1.png" />
                </div>
              ) : null}
              <div
                className={`col-lg-6 col-md-12 topsection-text-container ${
                  this.props.windowDimensions.width > 480
                    ? ""
                    : "sec1-container-flex"
                }`}
              >
                <div
                  className={`${
                    this.props.windowDimensions.width > 480
                      ? "margin-bottom-50"
                      : ""
                  }`}
                >
                  <Logo />
                  <h1 className="topsection-h1">Администратор в Instagram</h1>
                  <h3 className="topsection-h3">
                    получи востребованную интернет-профессию по цене 5 чашек
                    кофе
                  </h3>
                </div>
                <div>
                  <h3 className="topsection-h3 margin-0 text-uppercase">
                    Бесплатный вебинар
                  </h3>
                  <h3 className="topsection-h3 margin-10">
                    "Твоя целевая аудитория"
                  </h3>
                  <Button
                    btntext="Записаться"
                    btnclass="btn-main margin-0 text-uppercase"
                    blank={true}
                    btnlink="http://self-marketing.getcourse.ru/page1#besplatniy_vebinar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Section1.propTypes = {
  windowDimensions: PropTypes.object
};

export default connect(
  state => ({
    windowDimensions: state.viewport.dimensions
  }),
  dispatch => ({})
)(Section1);
