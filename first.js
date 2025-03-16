const form =document.getElementById("search-form");
const input=document.getElementById("search-input");
const container=document.getElementById("image-container");

const apiEndpoint = "https://api.unsplash.com/search/photos";
const apiKey ="7rAYg0dvp4EGQinSNjnldBjYvAbdDpdOiclXCz8_0BI";

function fetchImages(query) {
  // Clear the previous images from the container
  container.innerHTML = "";
  
  const url = `${apiEndpoint}?query=${query}&client_id=${apiKey}`;
  
  fetch(url)
      .then(response => response.json()) // Use the json method to parse the response
      .then(data => {
          
          data.results.forEach(result => {
           
              const img = document.createElement("img");
              
              img.setAttribute("src", result.urls.regular);
              
              container.appendChild(img);
          });
      })
      .catch(error => console.error(error)); // Catch and log any errors
}


form.addEventListener("submit", event => {
 
event.preventDefault();
 
const query = input.value;
 
fetchImages(query);
});