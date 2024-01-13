//найдем все элементы
const btnNode = document.querySelector('.btn');
const inputNode1 = document.querySelector('.page');
const inputNode2 = document.querySelector('.limit');
const resultNode = document.querySelector('.result');

//Сохраняем сессию с данными
document.addEventListener("DOMContentLoaded", () => {
    storageItem = localStorage.getItem('lastResponse')
    if (storageItem) {
        showResult(JSON.parse(storageItem));
    }
});

function getError(msg) {
    elem = document.createElement('p');
    elem.textContent = msg;
    resultNode.append(elem);
}
//используем метод Fetch
const useRequest = (page, limit) => {
  return fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`)
  .then ((response) => {
    return response;
  })
  .then(data => {
    result = data.json();
    return result;
  })
  .catch(() => {
    console.log('error')
  });
}

function showResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
           <img class="card-img" src="${item.url}">
        </div>
        `;
        cards += cardBlock;
    });
    resultNode.innerHTML = cards;
}
//Обозначим результаты нажатия 
btnNode.addEventListener('click', async () => {
  const page = Number(inputNode1.value);
  const limit = Number(inputNode2.value);
  const pageError = isNaN(page) || page < 1 || page > 10;
  const limitError = isNaN(limit) || limit < 1 || limit > 10;
  if (pageError) {
     getError('Номер страницы вне диапазона от 1 до 10');
    }
    if (limitError) {
        getError('Лимит вне диапазона от 1 до 10');
    }
    if (pageError && limitError) {
        getError('Номер страницы и лимит вне диапазона от 1 до 10');
    }
    if (!pageError && !limitError) {
        const requestResult = await useRequest(page, limit);
        localStorage.setItem('lastResponse', JSON.stringify(requestResult));
        showResult(requestResult);
    }
})

// кнопка очистки
function reset() {
  const del = document.querySelector('.result')
  const parent = del.parentNode
  parent.removeChild(del)
}