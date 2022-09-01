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


function handleSearchFormSubmit(event) {
  event.preventDefault();

//  Code to get values
var searchInputVal = document.querySelector('#search-bar').value;
 
  if (!searchInputVal) {
    console.error('You need a search input value!');
    return; }

  var queryString = './search.html?q=' + searchInputVal

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);