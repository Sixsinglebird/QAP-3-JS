// author: A Singleton
/////////////////////////////////////////////////////
// functions
async function loadBreedsAPI() {
  let url = "https://dog.ceo/api/breeds/list/all";
  await fetch(url)
    .then((response) => response.json())
    .then((breeds) => {
      Object.keys(breeds.message).forEach((breed)=>{
        let out = `<option value="${breed}">${breed}</option>`;
        console.log(out);
      });
    });
  };

/////////////////////////////////////////////////////
// load the doggo API
window.onload = () => {
  loadBreedsAPI();
  // loadImagesAPI();
};
