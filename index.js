//DOG API URL 
let url = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"

//Variables
let img = document.getElementById("img");
let main = document.getElementById("card");
let button = document.getElementById("button");


//fetch
const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_ZSbsqiS0v6wbxkn52iggIUmWircyjDm5mpYb9DClSh0DvVYz3w9qKgeOw29XsGFG",
});

let requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

async function newDog() {
  fetch(url)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
};

/* Having issues with the image poping up, it shows in the console.log that's it.
*/
//event listener
button.addEventListener("click", (e) => {
 img.src = "";
  newDog();
})


