var btnContainer = document.querySelector(".artistBtnContainer");
// var searchInput = document.querySelector("#search-bar");
var searchBtn = document.querySelector("#searchbtn");
var HomeBtn = document.querySelector("#back")
var results = document.querySelector("#song-result")

function getParams() {

  var searchParamsArr = document.location.search.split('&');

  // Get the query and format values
  var searchInputVal = searchParamsArr[0].split('=').pop();
console.log(searchInputVal)
  getToken(searchInputVal);
}

var getEvents = async function (searchInput) {
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
}
function displayEvents(data, searchInput){
var eventsArr = data._embedded.events
console.log(eventsArr)

for(var i=0; i < 5; i++){
var eventBtn = document.createElement("a")
eventBtn.textContent = eventsArr[i]._embedded.venues[0].name
eventBtn.setAttribute("href", eventsArr[i].url )
results.append(eventBtn)
console.log(eventsArr[i])
}

};

function getToken(input) {

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
getArtist(data.access_token, input)
getEvents(input)
})
};
const getArtist = async (token, searchInput) => {
// console.log(searchInput.value)
const result = await fetch(`https://api.spotify.com/v1/search` +`?q=` + searchInput + `&type=track&limit=10`, {
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
results.append(trackBtn)
console.log(track.name)
console.log(track.external_urls.spotify)
console.log(track)
})

}

getParams();

function handleSearchFormSubmit(event) {
    event.preventDefault();
     var queryString = './index.html'
    location.assign(queryString);
  }
  HomeBtn.addEventListener('click', handleSearchFormSubmit);
