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
        "Логан1",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//document.querySelector('.promo__adv').remove(); // 1

document.querySelectorAll('.promo__adv img').forEach(item => {
    item.remove();
}); 

document.getElementsByClassName('promo__genre')[0].textContent = 'драма'; // 2

// const pr = document.getElementsByClassName('promo__genre'); //.textContent = 'драма';
// pr[0].textContent = 'драма';
// console.log(pr);

 document.querySelector('.promo__bg').style.background = 'url(./img/bg.jpg) center center/cover no-repeat'; // 3
// document.querySelector('.promo__bg').style.cssText = `background-image: url('./img/bg.jpg')`;

//document.querySelector('.promo__bg').style.backgroundImage = 'url("./img/bg.jpg")';


// const filmList = document.querySelectorAll('.promo__interactive-item'); // 4, 5
const filmList = document.querySelector('.promo__interactive-list'); // урок

filmList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach( (item, i) => {
    filmList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${item}
            <div class="delete">
        </li>
    `;
    // filmList.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item">${i+1}. ${item}</li>`);
});

// movieDB.movies.forEach( (item, i) => {
//     const li = document.createElement('li');
//     li.classList.add('promo__interactive-item'); 
//     li.innerHTML = `${i+1}. ${item}`;
//     filmList.append(li);
// });

// movieDB.movies.forEach( (item, i) => {
//     const li = document.createElement('li');
//     li.classList.add('promo__interactive-item'); 
//     li.innerHTML = `${i+1}. ${movieDB.movies.sort()[i]}`;
//     filmList.append(li);
// });
    

// filmList.forEach( (item, i) => {
//     item.textContent = `${i+1}. ${movieDB.movies.sort()[i]}`;
// });


//filmList.prepend(movieDB.movies);
//`${movieDB.movies[i]}`
//console.log(movieDB.movies[0]);