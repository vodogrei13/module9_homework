function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
  
    xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('Статус: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
       if (callback) {
       callback(result)
      }
    }
  };
    xhr.onerror = function () {
    console.log('Error! Статус ответа: ', xhr.status);
    };
    xhr.send();
  }; //useRequest
  
  const btnNode = document.querySelector('button');
  const resultNode = document.querySelector('.result');
  
  function getResult (apiData) {
    let cards = '';
    apiData.forEach(item => {
      const cardBlock = `
      <div class = "card">
        <img class = "card-img" src = "${item.url}">
        <br>
      </div>
    `;
      cards += cardBlock;
    });
    resultNode.innerHTML = cards;
  };
  btnNode.addEventListener('click', () => {
    const value = document.querySelector('input').value;
    if (value < 1 || value > 10) {
      resultNode.innerHTML = "<p>Число вне диапазона от 1 до 10</p>";
    } else {
      url = `https://jsonplaceholder.typicode.com/photos?_limit=5`;
      useRequest(url, getResult)
    }
  })