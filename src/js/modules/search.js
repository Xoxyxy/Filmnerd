import { request } from '../services/services'
import { form, input, resultText } from '../utils/variables'

function searchFilms(url) {

  form.addEventListener('submit', event => {
    event.preventDefault()
    history.pushState(null, null, '?page=1')

    const inputValue = input.value.trim()
    if (inputValue == '') return

    const searchValue = `${url}${input.value}`
    request(searchValue)

    resultText.innerText = `Результат поиска по запросу: ${inputValue.toLowerCase()}`
    input.value = ''
  })
}

export { searchFilms }