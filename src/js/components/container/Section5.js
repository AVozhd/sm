import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../presentational/Card';

class Section5 extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.render();
    });
  }

  render() {
    return(
      <section>
        <h1 className="section2-title">
          Варианты обучения
        </h1>
        <div className="container">
          <div className="row">
            <Card containerKlass="card col-lg-4 col-md-6 col-12"
                  imgpath="images/performance.svg"
                  cardKlass="card1"
                  title="Сам себе маркетолог"
                  titleKlass="text-center"
                  tekstKlass="text-center"
                  tekst="Доступ к лекциям на 30 дней. Проверка домашнего задания без разбора." />
            <Card containerKlass="card col-lg-4 col-md-6 col-12"
                  imgpath="images/evaluation.svg"
                  cardKlass="card2"
                  title="Мастер-маркетолог"
                  titleKlass="text-center"
                  tekstKlass="text-center"
                  tekst="Доступ к лекциям на 30 дней. Полная проверка домашних заданий с разбором. Доступ в чат поддержки и другие активности курса." />
            <Card containerKlass=" card col-lg-4 col-md-6 col-12"
                  imgpath="images/conference.svg"
                  cardKlass="card3"
                  title="Лучший ученик"
                  titleKlass="text-center"
                  tekstKlass="text-center"
                  tekst="Доступ к лекциям на 45 дней. Полная проверка домашних заданий с разбором. Доступ в чат поддержки и другие активности курса. Онлайн поддержка куратора. Разбор профиля и вопросов по личному профилю." />
          </div>
        </div>
      </section>
    )
  }
}

Section5.propTypes = {
  windowDimensions: PropTypes.object,
};

export default connect((state => ({
  windowDimensions: state.viewport.dimensions,
})), (dispatch => ({})))(Section5);
