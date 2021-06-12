/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const promo = document.querySelectorAll('.promo__adv img'),
      backgroundPic = document.querySelector('.promo__bg'),
      promoGenre = backgroundPic.querySelector('.promo__genre'), 
      filmsList = document.querySelector('.promo__interactive-list');
promo.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'Tragedy';


backgroundPic.style.backgroundImage = "url('img/bg.jpg')";

filmsList.innerHTML ="";
movieDB.movies.sort();
movieDB.movies.forEach((ietem, i) => {
    filmsList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}.${ietem}
    <div class="delete"></div>
</li>
    `;
});

