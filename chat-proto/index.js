const batch = 247;
const baseUrl = "https://wagon-chat.herokuapp.com/";


const inputForm = document.querySelector("#comment-form")
const userContent = document.querySelector("#your-message")
const userName = document.querySelector("#your-name")
const insertArea = document.querySelector(".list-unstyled")
const refreshButton = document.querySelector("#refresh")

function insert(item){
  insertArea.insertAdjacentHTML('beforeend', item)
}




inputForm.addEventListener('submit', (event) => {
event.preventDefault();

  const userValue = userContent.value;
  const userNameValue = userName.value;

  const newHTMLElement =
`<li> ${userValue} (posted <span class="date"> X time ago</span>) by ${userNameValue}</li>`

insert(newHTMLElement)

const message = { author: userNameValue, content: userValue };
const url = `https://wagon-chat.herokuapp.com/${batch}/messages`;

fetch(url, {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(message)
})
.then(response => response.json())
.then((data) => {
});

  });



const ajaxCall = () => {

fetch(`https://wagon-chat.herokuapp.com/${batch}/messages`)
.then(response => {
     return response.json()
   })
    .then(json => {
     const dataFromAPI = json

dataFromAPI.messages.forEach((item) => {

 const createdMessage = `<li>${item.content} (posted <span class="date">${item.created_at}</span>) by ${item.author}</li>`
insert(createdMessage)

});

  });

}


setInterval(ajaxCall(), 999);

