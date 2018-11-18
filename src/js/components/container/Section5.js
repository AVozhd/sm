import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "../presentational/Card";

class Section5 extends React.Component {
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.render();
    });
  }

  render() {
    return (
      <section className="margin-bottom-30">
        <h1 className="section2-title">Варианты обучения</h1>
        <div className="container">
          <div className="row">
            <a
              href="http://self-marketing.getcourse.ru/page1#samsebemarketolog"
              target="_blank"
              className="card col-lg-4 col-md-6 col-12 section5-card-link"
            >
              <Card
                imgpath="images/performance.svg"
                cardKlass="card1 section5-card"
                title="Сам себе маркетолог"
                titleKlass="text-center"
                tekstKlass="text-center"
                noImgResize={true}
                tekst="Доступ к лекциям на 30 дней. Проверка домашнего задания без разбора."
              />
              <button
                type="button"
                className="btn btn-outline-info sec5-price-btn"
              >
                <strike>3000 ₽</strike>
                <span className="actual-price"> 1499 ₽</span>
              </button>
            </a>
            <a
              href="http://self-marketing.getcourse.ru/page1#mastermarketolog"
              target="_blank"
              className="card col-lg-4 col-md-6 col-12 section5-card-link"
            >
              <Card
                imgpath="images/evaluation.svg"
                cardKlass="card2 section5-card"
                title="Мастер-маркетолог"
                titleKlass="text-center"
                tekstKlass="text-center"
                noImgResize={true}
                tekst="Доступ к лекциям на 30 дней. Полная проверка домашних заданий с разбором. Доступ в чат поддержки и другие активности курса."
              />
              <button
                type="button"
                className="btn btn-outline-info sec5-price-btn"
              >
                <strike>5000 ₽</strike>
                <span className="actual-price"> 2499 ₽</span>
              </button>
            </a>
            <a
              href="http://self-marketing.getcourse.ru/page1#luchshiquchenik"
              target="_blank"
              className="card col-lg-4 col-md-6 col-12 section5-card-link"
            >
              <Card
                imgpath="images/conference.svg"
                cardKlass="card3 section5-card"
                title="Лучший ученик"
                titleKlass="text-center"
                tekstKlass="text-center"
                noImgResize={true}
                tekst="Доступ к лекциям на 45 дней. Полная проверка домашних заданий с разбором. Доступ в чат поддержки и другие активности курса. Онлайн поддержка куратора. Разбор профиля и вопросов по личному профилю."
              />
              <button
                type="button"
                className="btn btn-outline-info sec5-price-btn"
              >
                <strike>10 000 ₽</strike>
                <span className="actual-price"> 4999 ₽</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

Section5.propTypes = {
  windowDimensions: PropTypes.object
};

export default connect(
  state => ({
    windowDimensions: state.viewport.dimensions
  }),
  dispatch => ({})
)(Section5);
