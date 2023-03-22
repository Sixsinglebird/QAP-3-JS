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
  let num = document.querySelector("#number").value;
  if (num >= 50) {
    alert(
      `${num} is an invalid number This webpage is limited to display 50 images; Displaying 50 Images`
    );
  }
  let url = `https://dog.ceo/api/breed/${
    document.querySelector("#breeds").value
  }/images/random/${num}`;
  let out = [];
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      response.message.forEach((image) => {
        out.push(`<img class="doggo" src="${image}">`);
      });
      document.querySelector("#display").innerHTML = out;
    })
    .catch((errors) => console.log(errors));
};

/////////////////////////////////////////////////////
// load the doggo API
window.onload = () => {
  loadBreedsAPI();
  // loadImagesAPI();
};

document.querySelector("#search").addEventListener("click", getDoggos);
