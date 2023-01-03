import { render } from '../modules/render'
import { showLoader, hideLoader } from '../utils/functions'
import { cardsContainer, APIKey, resultText, pagination } from '../utils/variables'

async function request(url) {
  try {
    cardsContainer.innerHTML = ''
    pagination.innerHTML = ''
    showLoader()

    const resp = await fetch(url, {
      headers: {
        'X-API-KEY': APIKey,
        'Content-type': 'application/json'
      }
    })

    const data = await resp.json()
    render(data)

    return data
  } catch (err) {
    cardsContainer.innerHTML = `
  <div class="card__error"><div>Что-то пошло не так :(</div><div>Можете обратится к документации: <a href="https://github.com/Xoxyxy/Filmnerd" target="_blank">https://github.com/Xoxyxy/Filmnerd</a></div></div>
  `
    hideLoader()
    resultText.remove()
    throw console.error(err)
  }
}

async function requestOfModal(url, id) {
  showLoader()
  const resp = await fetch(url + id, {
    headers: {
      'X-API-KEY': APIKey,
      'Content-type': 'application/json'
    }
  })

  return await resp.json()
}

export { requestOfModal, request }