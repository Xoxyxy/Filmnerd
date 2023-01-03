const APIKey = 'dd2567a5-1ae4-4189-8e75-1c32c30ca4b5'
const APITopFilms = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page='
const APISearchFilms = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='
const APIFilmInfoById = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/'

const cardsContainer = document.querySelector('.hero__container')
const loader = document.querySelector('.loader')

const form = document.querySelector('.header__form')
const input = document.querySelector('.header__search')

const modal = document.querySelector('.modal')
const body = document.body

const resultText = document.querySelector('.hero__result')

const pagination = document.querySelector('.pagination__list')

export { APIKey, APITopFilms, APISearchFilms, APIFilmInfoById, cardsContainer, loader, form, input, modal, body, resultText, pagination }