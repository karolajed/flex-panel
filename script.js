const panels = document.querySelectorAll('.panel');

function openPanel() {
  this.classList.toggle('open');
};

function activePanel(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('active');
  }
};

panels.forEach(panel => panel.addEventListener('click', openPanel));
panels.forEach(panel => panel.addEventListener('transitionend', activePanel));