const API = {
  API_KEY: 'dd2567a5-1ae4-4189-8e75-1c32c30ca4b5',
  API_TopFilms: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=',
  API_SearchFilms: 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=',
  API_FilmInfoById: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/'
}

const cardsContainer = document.querySelector('.hero__container')
const loader = document.querySelector('.loader')

const form = document.querySelector('.header__form')
const input = document.querySelector('.header__search')

const modal = document.querySelector('.modal')
const body = document.body

const resultText = document.querySelector('.hero__result')

const pagination = document.querySelector('.pagination__list')

export {
  API,
  cardsContainer,
  loader,
  form,
  input,
  modal,
  body,
  resultText,
  pagination
}