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


/*Search button, input work, and locate to search.html*/
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-bar').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search.html'
  location.assign(queryString);
}
searchBtn.addEventListener('click', handleSearchFormSubmit);


