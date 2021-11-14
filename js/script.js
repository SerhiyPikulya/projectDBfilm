/* Задания на урок: 6*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {  // чекаємо завантаження всього DOM

    const movieDB = {
        movies: [
            "Логан 1",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    //отримуємо елементи з сторінки
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('form.add');
    
    adv.forEach(item => {
        item.remove();
    });
    
    genre.textContent = 'драма';
    
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    
    const addMovies = () => {
        movieList.innerHTML = "";
    
        movieDB.movies.sort();
        
        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        dellFilm();
    };

    const dellFilm = () => {
        const film = document.querySelectorAll('.delete');
    
        film.forEach((item, i) => {
            item.addEventListener('click', (event) => {
                //event.target.parentNode.remove();
                movieDB.movies.splice(i, 1);
                addMovies();
            });
            
        });      
    };
    
    addMovies();
    //dellFilm();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = form.querySelector('.adding__input').value;

        if (newFilm != '') {         // Або if (newFilm) - false, якщо пуста
            
            if (newFilm.length > 21) {
                newFilm = newFilm.slice(0, 21) + '...'; // newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (form.querySelector('input[type=checkbox]').checked) {
                console.log('Додаємо улюблений фільм');
            }

            movieDB.movies.push(newFilm);

            addMovies();
            
        }
        form.reset();
        //event.target.reset(); // також правильно
    });
    
});



/* МОЇ СПРОБИ

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

// document.querySelector('.promo__bg').style.background = 'url(./img/bg.jpg) top center/cover no-repeat'; // 3
// document.querySelector('.promo__bg').style.cssText = `background-image: url('./img/bg.jpg')`;

document.querySelector('.promo__bg').style.backgroundImage = 'url("./img/bg.jpg")';


// const filmList = document.querySelectorAll('.promo__interactive-item'); // 4, 5
const filmList = document.querySelector('.promo__interactive-list'); // урок

const MovieScreen = () => {
    filmList.innerHTML = "";
    movieDB.movies.sort();

    movieDB.movies.forEach( (item, i) => {
        filmList.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${item}<div class="delete">
            </li>
        `;
        // filmList.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item">${i+1}. ${item}</li>`);
    });
};

MovieScreen();

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

const btn = document.querySelector('button');
      
const addFilm = (event) => {
    event.preventDefault();
    let inputV = document.querySelector('.adding__input').value;
    if (inputV.length > 21) {
        inputV = inputV.slice(0, 21) + '...';
    }
    movieDB.movies.push(inputV);
    MovieScreen();
    //console.log(movieDB.movies);
    const like = document.querySelector('.yes').previousElementSibling;
    if (like.checked === true) {
        console.log('Додаємо улюблений фільм');
    }
    df();
};

const df = () => {

btn.addEventListener('click', addFilm);

const delFilm = document.querySelectorAll('.delete');

const deleteFilm = (event) => {
    event.target.parentNode.remove();
    let x = 1;
    for (const i of movieDB.movies) {
        if (`"${x}. ${i}"` != event.target.previousSibling) {
            console.log(`"${x}. ${i}"`);
            console.log(event.target.previousSibling);
        }
        x++;
    }
    let a = event.target.previousSibling;
    const b = event.target.parentNode;
    // MovieScreen();
    a = toString(a);
    console.log(a);
    console.log(typeof(a));
    console.log(b);
    console.log(typeof(b));
    console.log(event);
    console.log(typeof(event));
};

delFilm.forEach(item => {
     item.addEventListener('click', deleteFilm);
});

};

df();

console.log(movieDB.movies);



//event.preventDefault();
*/