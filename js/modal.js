export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
}

Modal.btnClose.onclick = () => {
  Modal.close();
}

window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.code === 'Escape') {
    Modal.close();
  }
}