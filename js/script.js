 // Находим все карточки
 var cards = document.querySelectorAll('.card');

 // Добавляем обработчик события для каждой карточки
 cards.forEach(function(card) {
   card.addEventListener('mouseover', function() {
     // Изменяем цвет при наведении
     card.style.backgroundColor = 'lightgray';
   });

   card.addEventListener('mouseout', function() {
     // Возвращаем исходный цвет при уходе мыши
     card.style.backgroundColor = '';
   });
 });