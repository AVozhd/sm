import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Slide from "../presentational/Slide";

class Section6 extends React.Component {
  render() {
    console.log(this.props.windowDimensions.height);
    return (
      <section
        className={
          this.props.windowDimensions.height > 767
            ? "margin-bottom-60"
            : "margin-bottom-30"
        }
      >
        <div className="container">
          <div
            id="carouselControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <Slide
                active="active"
                imgpath="images/pict1.png"
                titleKlass="text-center small margin-bottom-10"
                tekstKlass="text-center margin-bottom-30"
                imgKlass="margin-bottom-30"
                title="Яна Борисова, сказкотерапевт"
                tip="@krasotulya_yanulya"
                tipKlass="text-center small margin-top-0"
                tekst="До прохождения обучения я абсолютно ничего не знала о Instagram. Можно сказать, что я была супер-новичок. Как пользователь я умела постить фото и наверно всё. Спасибо большое курсу Self.Marketing за мою новую профессию. Раньше сказкотерапия для меня было просто хобби, но благодаря моему блогу в Instagram  - стала хобби, которое приносит прибыль. Советую всем, кто хочет перейти на удаленную работу."
                containerHeight={this.props.windowDimensions.height / 2}
              />
              <Slide
                imgpath="images/pict3.png"
                imgKlass="margin-bottom-30"
                titleKlass="text-center small margin-bottom-10"
                tekstKlass="text-center margin-bottom-30"
                title="Светлана Ланская, ведущая мероприятий Москва"
                tekst="Очень рада, что Вас нашла. Буквально руки мне развязали!"
                tip="@svetalanskaya"
                tipKlass="text-center small margin-top-0"
                containerHeight={this.props.windowDimensions.height / 2}
              />
              <Slide
                imgpath="images/pict2.png"
                imgKlass="margin-bottom-30"
                titleKlass="text-center small margin-bottom-10"
                tekstKlass="text-center margin-bottom-30"
                title="Елена Мухлынина, мастер-бровист из Находки"
                tekst="Мне все понравилось!  Мой блог преобразился, думаю все увидят разницу."
                tip="@elenamukhlinina"
                tipKlass="text-center small margin-top-0"
                containerHeight={this.props.windowDimensions.height / 2}
              />
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

Section6.propTypes = {
  windowDimensions: PropTypes.object
};

export default connect(
  state => ({
    windowDimensions: state.viewport.dimensions
  }),
  dispatch => ({})
)(Section6);
