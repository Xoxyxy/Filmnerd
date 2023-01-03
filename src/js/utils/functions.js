import { loader } from './variables'

const hideLoader = () => loader.classList.add('hide')
const showLoader = () => loader.classList.remove('hide')

const existenceCheck = el => {
  if (el == 'null' || el == undefined) return '-'
  return el
}

const checkNameLength = el => {
  el = existenceCheck(el)
  if (el.length > 16) return `${el.slice(0, 16)}...`
  return el
}

const getFirstGenre = el => {
  if (el == '-') return el

  let genreWord
  el.forEach(genre => genreWord = genre.genre)
  return existenceCheck(genreWord)
}

const getGenres = el => {
  return el.map(genre => ` ${genre.genre}`)
}

const changeRatingAgeLimits = el => {
  el = existenceCheck(el)
  return el != '-' ? `${el.slice(3)}+` : el
}

const checkOfFilmLength = el => {
  el = existenceCheck(el)
  return el != '-' ? `${el} минут` : el
}

export { hideLoader, showLoader, existenceCheck, checkNameLength, getFirstGenre, getGenres, changeRatingAgeLimits, checkOfFilmLength }