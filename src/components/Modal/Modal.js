import { Component } from 'react';
import { Overlay, ModalBox } from './Modal.styled';

export class Modal extends Component {
  // Вішаємо слухач на window по натисканню клавіші при монтуванні
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Видаляємо слухача з window при розмонтуванні
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Закриваємо модалку по клавіші Esc
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClick();
    }
  };

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { largeUrl, tags } = this.props;
    return (
      <Overlay class="overlay" onClick={this.handleClick}>
        <ModalBox class="modal">
          <img src={largeUrl} alt={tags} />
        </ModalBox>
      </Overlay>
    );
  }
}
