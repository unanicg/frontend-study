function toggleAlert() {
  document.querySelector('.modal-container').classList.toggle('show');
}

document.querySelectorAll('button')[0].addEventListener('click', toggleAlert);
document.querySelector('.icon-wrap').addEventListener('click', toggleAlert);
