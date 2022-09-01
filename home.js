var btnContainer = document.querySelector(".artistBtnContainer");
var searchInput = document.querySelector("#search-bar");
var searchBtn = document.querySelector("#searchbtn");

let slideIndex = 0;
var searchInputVal;

// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

function handleSearchFormSubmit(event) {
  event.preventDefault();
//  Code to get values
searchInputVal = document.querySelector('#search-bar').value;
  if (!searchInputVal) {
    console.error('You need a search input value!');
    return; }
  var queryString = './search.html?q=' + searchInputVal
  getToken();
  // location.assign(queryString);
}
searchBtn.addEventListener('click', handleSearchFormSubmit);








  var getEvents = function (searchInput) {
    var ticketMaster = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=aHO1boEvSw5W3eAvMn8m0d8RJpKAsYLH' + '&keyword=' + searchInput;
  
    fetch(ticketMaster)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayEvents(data, searchInput);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to TicketMaster');
      });
  };

function getToken() {

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
 getArtist(data.access_token)
})
};
const getArtist = async (token) => {
// console.log(searchInput.value)
  const result = await fetch(`https://api.spotify.com/v1/search` +`?q=` + searchInput.value + `&type=track&limit=5`, {
    method: 'GET',
    headers: {'Authorization' : 'Bearer ' + token}
  });

  console.log(result)
  const data = await result.json();
  console.log(data)
var trackArr = data.tracks.items


trackArr.forEach(function(track) {
  var trackBtn = document.createElement("a")
  trackBtn.textContent = track.name
  trackBtn.setAttribute("href", track.external_urls.spotify )
  btnContainer.append(trackBtn)
  console.log(track.name)
  console.log(track.external_urls.spotify)
  console.log(track)
})

}

// var fetchTracks = function (artistId, callback) {
//   $.ajax({
//       url: 'https://api.spotify.com/v1/artists/' + artistId,
//       success: function (response) {
//           callback(response);
//       }
//   });
// };