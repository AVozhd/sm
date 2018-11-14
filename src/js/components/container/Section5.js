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
                tekst="Доступ к лекциям на 30 дней. Проверка домашнего задания без разбора."
              />
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
                tekst="Доступ к лекциям на 30 дней. Полная проверка домашних заданий с разбором. Доступ в чат поддержки и другие активности курса."
              />
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
                tekst="Доступ к лекциям на 45 дней. Полная проверка домашних заданий с разбором. Доступ в чат поддержки и другие активности курса. Онлайн поддержка куратора. Разбор профиля и вопросов по личному профилю."
              />
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
