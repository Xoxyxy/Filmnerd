import { cardsContainer } from '../utils/variables'
import { hideLoader, existenceCheck, checkNameLength, getFirstGenre } from '../utils/functions'
import { openModal } from './modal'

function render(filmsObj) {
  filmsObj.films.forEach(film => {
    const card = document.createElement('div')
    card.classList.add('hero__card', 'card')

    card.innerHTML = `
    <div class="card__img-box">
      <img class="card__img"
        src=${film.posterUrl} loading="lazy"
        alt="Обложка фильма">
    </div>
    <div class="card__content">
      <div class="card__rate">
        <svg class="card__star-img" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.10326 2.31699C5.47008 1.57374 6.52992 1.57374 6.89674 2.31699L7.53068 3.60151C7.67635 3.89665 7.95791 4.10122 8.28362 4.14855L9.70117 4.35453C10.5214 4.47372 10.8489 5.48169 10.2554 6.06022L9.22964 7.06008C8.99395 7.28982 8.8864 7.62082 8.94204 7.94522L9.18419 9.35704C9.3243 10.1739 8.46687 10.7969 7.73324 10.4112L6.46534 9.74464C6.17402 9.59149 5.82598 9.59149 5.53466 9.74464L4.26676 10.4112C3.53313 10.7969 2.6757 10.1739 2.81581 9.35704L3.05796 7.94522C3.1136 7.62082 3.00605 7.28982 2.77036 7.06008L1.74461 6.06023C1.15109 5.48169 1.4786 4.47372 2.29882 4.35453L3.71638 4.14855C4.04209 4.10122 4.32365 3.89665 4.46932 3.60151L5.10326 2.31699Z" fill="#EB8C57"/>
        </svg> 
        <span class="card__rate-numb">${existenceCheck(film.rating)}</span>
      </div>
      <div class="card__name">${checkNameLength(film.nameRu)}</div>
      <div class="card__genre">${getFirstGenre(film.genres)}</div>
      <div class="card__time">${existenceCheck(film.filmLength)}</div>
    </div>
    `
    cardsContainer.append(card)
    hideLoader()
    card.addEventListener('click', () => openModal(film.filmId))
  })
}

export { render }