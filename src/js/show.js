document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.about-author .list-wrapper');
  const gradient = wrapper.querySelector('.gradient-box');
  const button = document.querySelector('.author-read-btn');

  button.addEventListener('click', function () {
    const isOpen = wrapper.classList.toggle('is-open');

    if (isOpen) {
      gradient.classList.add('hidden');
      button.textContent = 'Скрыть';
    } else {
      gradient.classList.remove('hidden');
      button.textContent = 'Читать дальше...';
    }
  });
});
