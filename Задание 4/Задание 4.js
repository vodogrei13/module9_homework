//найдем все элементы
const btnNode = document.querySelector('.btn');
const inputNodeW = document.querySelector('.width');
const inputNodeH = document.querySelector('.heigth');
const resultNode = document.querySelector('.result');
//используем метод Fetch
const useRequest = (value1, value2) => {
  return fetch (`https://dummyimage.com/${value1}x${value2}/`)
  .then ((response) => {
    return response;
  })
  .then(data => data.url)
  .catch(() => {
    console.log('error')
  });
}
//Обозначим результаты нажатия 
btnNode.addEventListener('click', async () => {
  value1 = Number(inputNodeW.value);
  value2 = Number(inputNodeH.value);
  if (value1 < 100 || value1 > 300 || isNaN(value1) || value2 < 100 || value2 > 300 || isNaN(value2)) {
    resultNode.textContent = 'Одно из чисел вне диапазона => (от 100 до 300)';
  } else {
    const requestResult = await useRequest(value1, value2);
    image = document.createElement('img');
    image.src = requestResult;
    resultNode.append(image);
  }
})
function reset() {
  const del = document.querySelector('.result')
  const parent = del.parentNode
  parent.removeChild(del)
}