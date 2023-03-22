// author: A Singleton
/////////////////////////////////////////////////////
// functions
async function loadBreedsAPI() {
  let url = "https://dog.ceo/api/breeds/list/all";
  await fetch(url)
    .then((response) => response.json())
    .then((breeds) => {
      let out = [];
      Object.keys(breeds.message).forEach((breed) => {
        document.querySelector(
          "#breeds"
        ).innerHTML += `<option value="${breed}">${breed}</option>`;
      });
    });
}

const getDoggos = () => {
  let breed = document.querySelector("#breeds").value;
  alert(breed);
  // let url = 
};

/////////////////////////////////////////////////////
// load the doggo API
window.onload = () => {
  loadBreedsAPI();
  // loadImagesAPI();
};

document.querySelector("#search").addEventListener("click",getDoggos);