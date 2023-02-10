import { request } from '../services/services'
import { queryParam } from '../modules/queryParam'
import { API, pagination } from '../utils/variables'

async function initApp(page = 1) {
  const data = await request(API.API_TopFilms + page)
  const pages = data.pagesCount

  for (let i = pages; i >= 1; i--) {
    pagination.insertAdjacentHTML('afterbegin', `
    <li class="pagination__item">
      <a href="?page=${i}" class="pagination__link ${i == queryParam ? 'pagination__link--active' : ''}">${i}</a>
    </li>
    `)
  }
}

export { initApp }