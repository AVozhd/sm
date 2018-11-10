import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let modalsShowing = 0;

function modalWillShow() {
  if (modalsShowing === 0 && document) {
    document.body.classList.add('modal-open');
  }

  modalsShowing += 1;
}

function modalWillHide() {
  modalsShowing -= 1;

  if (modalsShowing === 0 && document) {
    document.body.classList.remove('modal-open');
  }
}

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClickBackdrop: PropTypes.func,
    visible: PropTypes.bool.isRequired,
    wrapperProps: PropTypes.object,
    className: PropTypes.string,
    dialogClassName: PropTypes.string,
    fade: PropTypes.bool,
  };

  static defaultProps = {
    onClickBackdrop: null,
    wrapperProps: null,
    className: null,
    dialogClassName: null,
    fade: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: this.props.visible,
      modalIndex: 0,
    };
  }

  componentWillMount = () => {
    if (this.props.visible) {
      modalWillShow();
    }
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.visible !== prevProps.visible) {
      if (this.props.visible) {
        modalWillShow();
      } else {
        modalWillHide();
      }

      if (this.props.fade) {
        this.setState({ transitioning: true, modalIndex: modalsShowing }, () => {
          window.setTimeout(() => {
            this.setState({ visible: this.props.visible }, () => {
              window.setTimeout(() => { this.setState({ transitioning: false }); }, 150);
            });
          }, 16);
        });
      } else {
        this.setState({ visible: this.props.visible });
      }
    }
  }

  componentWillUnmount = () => {
    if (this.props.visible) {
      modalWillHide();
    }
  }

  stopPropagation = (event) => {
    event.stopPropagation();
  }

  renderBackdrop = () => {
    if (this.state.visible || this.state.transitioning) {
      return (
        <div
          className={classNames('modal-backdrop', { show: this.state.visible, fade: this.props.fade })}
          onClick={this.props.onClickBackdrop}
          role="presentation"
          style={{ zIndex: 1040 + this.state.modalIndex }}
        />
      );
    }

    return null;
  }

  render = () => {
    const {
      wrapperProps,
      className,
      dialogClassName,
      visible,
      onClickBackdrop,
      children,
      fade,
      ...other
    } = this.props;

    return (
      <div
        {...wrapperProps}
      >
        <div
          className={classNames('modal', { show: this.state.visible, fade: this.props.fade }, className)}
          style={{
            display: ((this.state.visible || this.state.transitioning) ? 'block' : 'none'),
            zIndex: 1040 + this.state.modalIndex + 1,
          }}
          role="dialog"
          aria-hidden={!this.state.visible}
          tabIndex="-1"
          onClick={onClickBackdrop}
          {...other}
        >
          <div className={classNames('modal-dialog', dialogClassName)} role="document" onClick={this.stopPropagation}>
            <div className="modal-content">
              {children}
            </div>
          </div>
        </div>
        {this.renderBackdrop()}
      </div>
    );
  }
}

export default Modal;