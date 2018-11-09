import React from 'react';
import $ from 'jquery';
import Modal from '../presentational/Modal';

export default class Section3 extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.modalBackdropClicked = this.modalBackdropClicked.bind(this);

    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      maintext1: 'Что будет',
      maintext2: 'на курсе?',
    };
  }

  modalBackdropClicked() {
    this.handleClose();
  }

  handleClose() {
    this.setState({
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
   });
  }

  handleShow(stateNum) {
    let showkey = `show${stateNum}`;
    switch (showkey) {
      case 'show1':
        this.setState({ show1: true });
        break;
      case 'show2':
        this.setState({ show2: true });
        break;
      case 'show3':
        this.setState({ show3: true });
        break;
      case 'show4':
        this.setState({ show4: true });
        break;
      case 'show5':
        this.setState({ show5: true });
        break;
    }
  }

  componentDidMount() {
    let selectors = [
      ".mainbtn-selector",
      ".btn1-selector",
      ".btn2-selector",
      ".btn3-selector",
      ".btn4-selector",
      ".btn5-selector",
    ];

    selectors.map((selector) => {
      $( selector ).hover(
        function(event) {
          let select = `.${getSelector(event)}`;
          if(select === '.mainbtn') {
            $( select ).addClass("mainbtn-hover");
          } else {
            $( select ).addClass("btn-hover");
          }
        }, function(event) {
          let select = `.${getSelector(event)}`;
          if(select === '.mainbtn') {
            $( select ).removeClass("mainbtn-hover");
          } else {
            $( select ).removeClass("btn-hover");
          }

        }
      );
    });

    selectors.map((selector) => {
      if(selector === '.mainbtn-selector') {
        $( selector ).on('click', (event) => {
          this.setState({
            maintext1: 'Много всего',
            maintext2: 'интересного!'
          });
        });
      } else {
        $( selector ).on('click', (event) => {
          let stateNum = getSelectorClass(event).replace(/[^\d]/g,'');
          this.handleShow(stateNum);
        });
      }
    });


  }

  render() {
    return(
      <section style={{ marginBottom: -this.props.containerWidth/8 }} >
        <Modal visible={this.state.show1} onClickBackdrop={this.modalBackdropClicked}>
          <div className="modal-header">
            <h3 className="modal-title">Теория про Instagram</h3>
            <button type="button" className="close" onClick={this.modalBackdropClicked}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Актуальные лимиты и ограничения на площадке.</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Какие инструменты есть в Instagram?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Какие из них хороши для личного блога, какие для магазина?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Что такое целевая аудитория и как ее определить?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Как оформить страничку в Instagram правильно?</p>
            </div>
          </div>
        </Modal>
        <Modal visible={this.state.show2} onClickBackdrop={this.modalBackdropClicked}>
          <div className="modal-header">
            <h3 className="modal-title">Контент</h3>
            <button type="button" className="close" onClick={this.modalBackdropClicked}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Как писать, чтобы Вы запомнились читателю?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>О чем писать?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Правила создания контент-плана (при продвижении с помощью конкурсных механик и рекламы)</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>О чем писать магазину?</p>
            </div>
          </div>
        </Modal>
        <Modal visible={this.state.show3} onClickBackdrop={this.modalBackdropClicked}>
          <div className="modal-header">
            <h3 className="modal-title">Фото-контент</h3>
            <button type="button" className="close" onClick={this.modalBackdropClicked}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Правила планирования</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Приемы обработки</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Вводный курс по Photoshop</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Урок-вдохновение и разбор профилей на примерах</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Как магазину или салону сделать профиль визуально красивым.</p>
            </div>
          </div>
        </Modal>
        <Modal visible={this.state.show4} onClickBackdrop={this.modalBackdropClicked}>
          <div className="modal-header">
            <h3 className="modal-title">Продвижение</h3>
            <button type="button" className="close" onClick={this.modalBackdropClicked}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Платные и Бесплатные методы продвижения.</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Как работать с Гивами, марафонам?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Как проводить конкурсы, которые приносят аудторию?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Где размещать рекламу?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Где узнать стоимость рекламы у всех блогеров?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Какие виды рекламы нужны личному блогу?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Какие виды рекламы "зайдут", если у Вас магазин или Вы частный мастер?</p>
            </div>
          </div>
        </Modal>
        <Modal visible={this.state.show5} onClickBackdrop={this.modalBackdropClicked}>
          <div className="modal-header">
            <h3 className="modal-title">Stories</h3>
            <button type="button" className="close" onClick={this.modalBackdropClicked}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Как увеличить вовлеченность?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Принципы работы. От чего увеличатся охваты?</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Как реанимировать "хромую лошадь"? (низкие охваты)</p>
            </div>
            <div className="modal-row">
              <img className="modal-flag" src="images/check.svg"/>
              <p>Идеи для сторис.</p>
            </div>
          </div>
        </Modal>
        <div className="container">
          <svg xmlns="http://www.w4.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800">
            <defs>
              <radialGradient id="radial-gradient" cx="398.09" cy="398.09" r="561.08" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#fff"/><stop offset="0.53" stopColor="#f8f8f9"/>
                <stop offset="1" stopColor="#edeef0"/>
              </radialGradient>
              <radialGradient id="radial-gradient-2" cx="272.18" cy="255.02" r="441.31" gradientUnits="userSpaceOnUse">
                <stop offset="0.04" stopColor="#d8d9dd"/>
                <stop offset="0.55" stopColor="#edeef0"/>
                <stop offset="1" stopColor="#f7f7f8"/>
              </radialGradient>
              <radialGradient id="radial-gradient-3" cx="302.4" cy="289.29" r="336.99" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#f7f7f8"/>
                <stop offset="0.51" stopColor="#fbfbfb"/>
                <stop offset="0.72" stopColor="#fff"/>
              </radialGradient>
              <radialGradient id="radial-gradient-4" cx="589.29" cy="404.37" r="26.51" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#464646"/>
                <stop offset="0.32" stopColor="#787878" stopOpacity="0.73"/>
                <stop offset="0.98" stopColor="#fafafa" stopOpacity="0.02"/>
                <stop offset="1" stopColor="#fff" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="radial-gradient-5" cx="534.05" cy="268.48" r="26.51" xlinkHref="#radial-gradient-4"/>
              <radialGradient id="radial-gradient-6" cx="401.77" cy="214.42" r="26.51" xlinkHref="#radial-gradient-4"/>
              <radialGradient id="radial-gradient-7" cx="271.03" cy="269.77" r="26.51" xlinkHref="#radial-gradient-4"/>
              <radialGradient id="radial-gradient-8" cx="216.13" cy="404.37" r="26.51" xlinkHref="#radial-gradient-4"/>
              <radialGradient id="radial-gradient-9" cx="140.62" cy="134.36" r="162.83" xlinkHref="#radial-gradient-3"/>
              <radialGradient id="radial-gradient-10" cx="639.19" cy="329.95" r="213.24" gradientUnits="userSpaceOnUse">
                <stop offset="0.04" stopColor="#0956c6"/>
                <stop offset="0.55" stopColor="#07a9f0"/>
                <stop offset="1" stopColor="#93dcfc"/>
              </radialGradient>
              <radialGradient id="radial-gradient-11" cx="653.79" cy="346.51" r="162.83" xlinkHref="#radial-gradient-3"/>
              <radialGradient id="radial-gradient-12" cx="550.63" cy="117.02" r="213.24" gradientUnits="userSpaceOnUse">
                <stop offset="0.04" stopColor="#2b3894"/>
                <stop offset="0.05" stopColor="#363d96"/>
                <stop offset="0.08" stopColor="#51489a"/>
                <stop offset="0.55" stopColor="#8078bf"/>
                <stop offset="1" stopColor="#d2a8d1"/>
              </radialGradient>
              <radialGradient id="radial-gradient-13" cx="565.23" cy="133.58" r="162.83" xlinkHref="#radial-gradient-3"/>
              <radialGradient id="radial-gradient-14" cx="338.24" cy="30.67" r="213.24" xlinkHref="#radial-gradient-12"/>
              <radialGradient id="radial-gradient-15" cx="352.84" cy="47.23" r="162.83" xlinkHref="#radial-gradient-3"/>
              <radialGradient id="radial-gradient-16" cx="51.89" cy="346.51" r="162.83" xlinkHref="#radial-gradient-3"/>
            </defs>
            <g className="cls-1">
              <g id="OBJECTS">
                <path className="main-anim" d="M550.76,397.87a152.15,152.15,0,0,0-38.34-101.19A152.71,152.71,0,0,0,287.59,503.32,152.71,152.71,0,0,0,550.76,397.87Z">
                  <animate attributeName="stroke-dashoffset" dur="6s" to="-820" repeatCount="indefinite"/>
                </path>

                <g className="mainbtn-selector">
                  <path className="cls-3 mainbtn" d="M550.76,397.87a152.15,152.15,0,0,0-38.34-101.19A152.71,152.71,0,0,0,287.59,503.32,152.71,152.71,0,0,0,550.76,397.87Z"/>
                  <path className="cls-5" d="M515.12,398.38A116.61,116.61,0,1,0,398.51,515,116.13,116.13,0,0,0,515.12,398.38Z"/>
                </g>

                <path className="cls-6" d="M400,217.54A182.46,182.46,0,1,1,271,271a181.27,181.27,0,0,1,129-53.44m0-8c-105.19,0-190.46,85.27-190.46,190.46S294.81,590.46,400,590.46,590.46,505.19,590.46,400,505.19,209.54,400,209.54Z"/>
                <path className="cls-8" d="M398.51,209.55v7A182.68,182.68,0,0,1,582.7,400.73h7A189.65,189.65,0,0,0,398.51,209.55Z"/>
                <path className="cls-9" d="M608.94,407.16h0l-12.57-12.54h0a13,13,0,1,0-18.08,18.56L590,424.86h0a13,13,0,1,0,19-17.7Z"/>
                <path className="cls-8" d="M209.38,399.44h7a182.69,182.69,0,0,1,182.9-182.9v-7a189.69,189.69,0,0,0-189.9,189.9Z"/>
                <path className="cls-10" d="M553.7,271.26h0l-12.56-12.54h0a13,13,0,1,0-18.08,18.56L534.73,289h0a13,13,0,1,0,19-17.71Z"/>
                <path className="cls-11" d="M421.43,217.2h0l-12.57-12.54h0a13,13,0,1,0-18.08,18.56l11.68,11.68h0a13,13,0,1,0,19-17.71Z"/>
                <path className="cls-12" d="M290.68,272.55h0L278.12,260h0A13,13,0,1,0,260,278.57l11.68,11.68h0a13,13,0,1,0,19-17.7Z"/>
                <path className="cls-14" d="M235.78,407.16h0l-12.56-12.54h0a13,13,0,1,0-18.09,18.56l11.69,11.68h0a13,13,0,1,0,19-17.7Z"/>

                <g className="btn1-selector">
                  <rect className="cls-23 btn1" x="136.73" y="400.26" width="76.91" height="6.24"/>
                  <path className="cls-23 btn1" d="M213.63,416.37a13,13,0,1,1,13-13A13,13,0,0,1,213.63,416.37Z"/>
                  <path className="cls-23 btn1" d="M171.9,399a73.48,73.48,0,0,0-18.53-48.89A73.78,73.78,0,0,0,44.74,449.92,73.79,73.79,0,0,0,171.9,399Z"/>
                </g>
                <path className="cls-24 btn1-selector" d="M154.68,399.22a56.14,56.14,0,0,0-14.15-37.34,56.34,56.34,0,0,0-82.95,76.24,56.34,56.34,0,0,0,97.1-38.9Z"/>

                <g className="btn2-selector">
                  <path className="cls-8 btn2" d="M260.63,186.83a73.51,73.51,0,0,0-18.53-48.9,73.79,73.79,0,0,0-108.63,99.85,73.79,73.79,0,0,0,127.16-50.95Z"/>
                  <rect className="cls-8 btn2" x="238.22" y="203.13" width="6.23" height="76.91" transform="translate(-100.14 241.41) rotate(-45)"/>
                  <path className="cls-8 btn2" d="M259.35,278a13,13,0,1,1,18.37,0A13,13,0,0,1,259.35,278Z"/>
                </g>
                <path className="cls-15 btn2-selector" d="M243.41,187.07a56.34,56.34,0,1,0-56.35,56.35A56.13,56.13,0,0,0,243.41,187.07Z"/>

                <g className="btn3-selector">
                  <rect className="cls-21 btn3" x="396.16" y="136.52" width="6.24" height="76.91"/>
                  <path className="cls-21 btn3" d="M386.29,213.43a13,13,0,1,1,13,13A13,13,0,0,1,386.29,213.43Z"/>
                  <path className="cls-21 btn3" d="M472.85,99.7a73.51,73.51,0,0,0-18.54-48.9,73.79,73.79,0,0,0-108.63,99.85A73.79,73.79,0,0,0,472.85,99.7Z"/>
                </g>
                <path className="cls-22 btn3-selector" d="M455.62,99.94A56.13,56.13,0,0,0,441.47,62.6a56.35,56.35,0,0,0-83,76.25,56.34,56.34,0,0,0,97.1-38.91Z"/>

                <g className="btn4-selector">
                  <rect className="cls-8 btn4" x="520.29" y="237.18" width="76.91" height="6.24" transform="translate(-6.26 465.48) rotate(-45)"/>
                  <path className="cls-8 btn4" d="M522.37,258.3a13,13,0,1,1,0,18.37A13,13,0,0,1,522.37,258.3Z"/>
                  <path className="cls-19 btn4" d="M685.24,186a73.5,73.5,0,0,0-18.53-48.89A73.78,73.78,0,1,0,685.24,186Z"/>
                </g>
                <path className="cls-20 btn4-selector" d="M668,186.29a56.34,56.34,0,1,0-56.35,56.34A56.14,56.14,0,0,0,668,186.29Z"/>

                <g className="btn5-selector">
                  <rect className="cls-7 btn5" x="586.8" y="400.26" width="76.91" height="6.23"/>
                  <path className="cls-17 btn5" d="M773.79,399A73.79,73.79,0,1,0,700,472.76,73.48,73.48,0,0,0,773.79,399Z"/>
                  <circle className="cls-7 btn5" cx="586.8" cy="403.38" r="12.99" transform="translate(-110.18 257.57) rotate(-22.69)"/>
                </g>
                <path className="cls-18 btn5-selector" d="M756.57,399.22a56.34,56.34,0,1,0-56.34,56.34A56.09,56.09,0,0,0,756.57,399.22Z"/>

              </g>
              <text className="text-main-circle mainbtn-selector" x="400" y="380">
                {this.state.maintext1}
              </text>
              <text className="text-main-circle mainbtn-selector" x="400" y="420">
                {this.state.maintext2}
              </text>
              <text className="text-circle1 btn1-selector" x="100" y="390">
                Теория
              </text>
              <text className="text-circle1 btn1-selector" x="100" y="410">
                про Instagram
              </text>
              <text className="text-circle2 btn2-selector" x="190" y="190">
                Контент
              </text>
              <text className="text-circle3 btn3-selector" x="400" y="105">
                Фото-контент
              </text>
              <text className="text-circle4 btn4-selector" x="612" y="190">
                Продвижение
              </text>
              <text className="text-circle5 btn5-selector" x="700" y="405">
                Stories
              </text>
            </g>
          </svg>
        </div>
      </section>
    )
  }
}

const getSelector = (event) => {
  let classList = $(event.currentTarget).attr('class').split(/\s+/);
  let preparedClassList = classList.filter(word => word.split('-')[1] === 'selector');
  let select = preparedClassList[0].split('-')[0];
  return select;
};

const getSelectorClass = (event) => {
  let classList = $(event.currentTarget).attr('class').split(/\s+/);
  let preparedClassList = classList.filter(word => word.split('-')[1] === 'selector');
  return preparedClassList[0];
};
