import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../presentational/Card';

class Section2 extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.render();
    });
  }

  render() {
    return(
      <section>
        <h1 className="section2-title">
          Курс будет полезен
        </h1>
        <div className="container">
          <div className="row">
            <Card containerKlass="card col-lg-4 col-md-6 col-12"
                  imgpath="images/card1.jpg"
                  cardKlass="card1"
                  title="Новичкам"
                  titleKlass="text-center"
                  tekstKlass="text-center"
                  tekst="Курс поможет Вам разобраться: как работает Instagram; как Вы можете начать зарабатывать на ведении других страничек." />
            <Card containerKlass="card col-lg-4 col-md-6 col-12"
                  imgpath="images/card2.jpg"
                  cardKlass="card2"
                  titleKlass="text-center"
                  tekstKlass="text-center"
                  title="Специалистам с базовыми знаниями"
                  tekst="Полная проверка домашнего задания поможет Вам найти свои ошибки. Так же курс полезен тем, кто хочет узнать новейшие инструменты и изменения в Instagram." />
            <Card containerKlass=" card col-lg-4 col-md-6 col-12"
                  imgpath="images/card3.jpg"
                  cardKlass="card3"
                  titleKlass="text-center"
                  tekstKlass="text-center"
                  title="Владельцам бизнеса и самозанятым"
                  tekst="Курс поможет Вам самостоятельно развивать Вашу страничку. Если Вам важно понять, что 'заходит' в Instagram, а что нет." />
          </div>
        </div>
      </section>
    )
  }
}

Section2.propTypes = {
  windowDimensions: PropTypes.object,
};

export default connect((state => ({
  windowDimensions: state.viewport.dimensions,
})), (dispatch => ({})))(Section2);
