import { requestOfModal } from '../services/services'
import { API, modal, body } from '../utils/variables'
import { hideLoader, existenceCheck, getGenres, changeRatingAgeLimits, checkOfFilmLength } from '../utils/functions'

async function openModal(id) {
  await requestOfModal(API.API_FilmInfoById, id)
    .then(film => {
      hideLoader()
      try {
        modal.innerHTML = `
        <div class="modal__window">
        <button class="modal__close btn-reset"><svg class="modal__close-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#eb8c57" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button>
          <div class="modal__img-box">
            <img class="modal__img" src=${film.posterUrl} loading="lazy" alt="Обложка фильма">
          </div>
          <div class="modal__content">
            <div class="modal__top">
              <span class="modal__name">${existenceCheck(film.nameRu)}</span>
            </div>
            <ul class="modal__list list-reset">
              <li class="modal__item"><span>Страна:</span> ${film.countries.map(country => ` ${country.country}`)}</li>
              <li class="modal__item"><span>Год:</span> ${existenceCheck(film.year)}</li>
              <li class="modal__item"><span>Время:</span> ${checkOfFilmLength(film.filmLength)}</li>
              <li class="modal__item"><span>Жанр:</span> ${getGenres(film.genres)}</li>
              <li class="modal__item"><span>Возраст:</span> ${changeRatingAgeLimits(film.ratingAgeLimits)}</li>
              <li class="modal__item"><span>Оценка:</span> ${existenceCheck(film.ratingKinopoisk)}</li>
            </ul>
            <div class="modal__descr"><div class="modal__descr-title">Описание:</div>${existenceCheck(film.description)}</div>
            </div>
          </div>
        `
      } catch (err) {
        modal.innerHTML = `
        <div class="modal__window modal__window--empty">
        <button class="modal__close btn-reset"><svg class="modal__close-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#eb8c57" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button>
        <div class="modal__empty">Информация отсутствует или недоступна</div>
        </div>
        `
      }
    })
  modal.classList.add('modal--active')
  body.classList.add('body--fixed')
}

function modalClose() {
  modal.classList.remove('modal--active')
  body.classList.remove('body--fixed')
}

function modalDelegation(el, event) {
  if (event && event.classList.contains(el)) modalClose()
}

modal.addEventListener('click', event => {
  modalDelegation('modal__close', event.target)
  modalDelegation('modal', event.target)
})

window.addEventListener('keydown', event => {
  if (event.code === 'Escape' && modal.classList.contains('modal--active')) modalClose()
})

export { openModal }