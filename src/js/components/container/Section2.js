import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../presentational/Card';

class Section2 extends React.Component {
  render() {
    return(
      <React.Fragment>
        <h1 className="section2-title">
          Курс будет полезен
        </h1>
        <div className="container">
          <div className="row">
            <Card klass="col-lg-4 col-md-6 col-12"
                  imgpath="images/card1.jpg"
                  title="Новичкам"
                  tekst="Курс поможет Вам разобраться: как работает Instagram; как Вы можете начать зарабатывать на ведении других страничек." />
            <Card klass="col-lg-4 col-md-6 col-12"
                  imgpath="images/card2.jpg"
                  title="Специалистам с базовыми знаниями"
                  tekst="Полная проверка домашнего задания поможет Вам найти свои ошибки. Так же курс полезен тем, кто хочет узнать новейшие инструменты и изменения в Instagram." />
            <Card klass="col-lg-4 col-md-6 col-12"
                  imgpath="images/card3.jpg"
                  title="Владельцам бизнеса и самозанятым"
                  tekst="Курс поможет Вам самостоятельно развивать Вашу страничку. Если Вам важно понять, что 'заходит' в Instagram, а что нет." />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Section2.propTypes = {
  windowDimensions: PropTypes.object
};

export default connect((state => ({
  windowDimensions: state.viewport.dimensions
})), (dispatch => ({})))(Section2);
