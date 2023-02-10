import '../css/normalize.css'
import '../css/main.css'

import { initApp } from './modules/initApp'
import { queryParam } from './modules/queryParam'
import { searchFilms } from './modules/search'
import { API } from './utils/variables'

document.addEventListener('DOMContentLoaded', () => {
  initApp(queryParam)
  searchFilms(API.API_SearchFilms)
})