import '../css/normalize.css'
import '../css/main.css'

import { initApp } from './modules/initApp'
import { queryParam } from './modules/queryParam'
import { searchFilms } from './modules/search'
import { APISearchFilms } from './utils/variables'

document.addEventListener('DOMContentLoaded', () => {
  initApp(queryParam)
  searchFilms(APISearchFilms)
})