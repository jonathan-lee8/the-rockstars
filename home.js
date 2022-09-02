var btnContainer = document.querySelector(".artistBtnContainer");
var searchInput = document.querySelector("#search-bar");
var searchBtn = document.querySelector("#searchbtn");

let slideIndex = 0;
var searchInputVal;

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


/*Andre M. TODO: Through Javascript get the button 
in Homepage to work and take to the results page

var searchFormEl = document.querySelector('#search-bar');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-bar').value;
 // var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal; //+ '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
*/
=======
function handleSearchFormSubmit(event) {
  event.preventDefault();
//  Code to get values
searchInputVal = document.querySelector('#search-bar').value;
  if (!searchInputVal) {
    console.error('You need a search input value!');
    return; }
  var queryString = './search.html?q=' + searchInputVal
  location.assign(queryString);
}
searchBtn.addEventListener('click', handleSearchFormSubmit);