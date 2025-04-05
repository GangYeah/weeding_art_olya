$(document).ready(function () {
  
  document.addEventListener('DOMContentLoaded', function () {
    // Функция проверки видимости элемента в области просмотра
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    }

    // Функция для добавления класса анимации
    function handleScroll() {
      const programItems = document.querySelectorAll('.program-item.fade-in');

      programItems.forEach(item => {
        if (isElementInViewport(item) && !item.classList.contains('visible')) {
          item.classList.add('visible');
        }
      });
    }

    // Слушаем событие прокрутки
    window.addEventListener('scroll', handleScroll);

    // Вызываем функцию при загрузке страницы, чтобы проверить начальное положение
    handleScroll();
  });
});
