// author: A Singleton
/////////////////////////////////////////////////////
// functions
async function loadBreedsAPI() {
  let url = "https://dog.ceo/api/breeds/list/all";
  await fetch(url).then((response) => console.log(response.json()));
}
/////////////////////////////////////////////////////
// load the doggo API
window.onload = () => {
  loadBreedsAPI();
  // loadImagesAPI();
};
