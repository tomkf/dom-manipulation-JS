const queryString = query => `https://wagon-dictionary.herokuapp.com/autocomplete/${query}`;
const searchBox = document.querySelector(".searchBox");
const insertToHtml = document.querySelector("#results");


searchBox.addEventListener('input', (event) => {

  const inputField = event.currentTarget.value;
  const searchUrl = queryString(inputField);
console.log(searchUrl)

  insertToHtml.innerHTML = '';


  fetch(searchUrl)
  .then(response => response.json());

  .then((json) => {
    const myData = json;
    myData.words.forEach((arrayItem) => {
      const liHtml = `<li>${arrayItem}</li>`;
      insertToHtml.insertAdjacentHTML('beforeend', liHtml);
    });

  });

});

