// i want to make a website to practice handling data
async function loadAPI() {
  let url = "https://dog.ceo/api/breeds/list/al";
  await fetch(url)
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        let output = `<div  class="profile"><img src= "${user.avatar_url}"><h3 id="login">${user.login}</h3><br><ul id="details"><li>id: ${user.id}</li><li>page: <a href="${user.html_url}">${user.html_url}</a></li></ul></div>`;
        document.querySelector("#dogs").innerHTML += output;
      });
    });
}

async function idSearch(value) {
  let url = "https://api.github.com/users";
  await fetch(url)
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user)=>{
        if (value == user.id) {
          let output = `<div  class="profile"><img src= "${user.avatar_url}"><h3 id="login">${user.login}</h3><br><ul id="details"><li>id: ${user.id}</li><li>page: <a href="${user.html_url}">${user.html_url}</a></li></ul></div>`;
          document.querySelector("#searched").innerHTML += output;
        };  
      });
    });
  };

async function awaitComment() {
  let comment = await fetch(`https://jsonplaceholder.typicode.com/comments`)
}

///////////////////////////////////////////////////
window.onload = () => {
  loadAPI();
};

// search button
const searchBttn = document.querySelector("#search");
searchBttn.addEventListener("click", () => {
  idSearch(document.querySelector("#id").value);
  document.querySelector("#id").value = "";
});
