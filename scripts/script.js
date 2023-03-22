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
  let url = `https://dog.ceo/api/breed/${document.querySelector("#breeds").value}/images/random/${document.querySelector("#number").value}`
  let out = [];
  fetch(url)
  .then((response)=> response.json())
  .then((response)=>{
    response.message.forEach((image)=>{
      out.push(`<img src="${image}">`)
    }); 
    document.querySelector("#display").innerHTML = out;
  })
};

/////////////////////////////////////////////////////
// load the doggo API
window.onload = () => {
  loadBreedsAPI();
  // loadImagesAPI();
};

document.querySelector("#search").addEventListener("click",getDoggos);