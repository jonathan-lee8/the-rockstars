let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const clientID = "38e525a962894a2c817eec7482681b60";

const clientSecret = "7dc693825518434f97548de1e223529b";


fetch("https://accounts.spotify.com/api/token", {
  method:"POST",
  headers:{
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization':'Basic ' + btoa(clientID + ':' +clientSecret)
  },
  body:'grant_type=client_credentials'
})
.then(response=>{
  return response.json()
})
.then(data=>{
  console.log(data)
})
