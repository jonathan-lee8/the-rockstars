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


  var getEvents = function (keyword) {
    var ticketMaster = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=aHO1boEvSw5W3eAvMn8m0d8RJpKAsYLH' + '&keyword=' + keyword;
  
    fetch(ticketMaster)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayEvents(data, keyword);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to TicketMaster');
      });
  };


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

const getArtist = async (token) => {

  const result = await fetch(`https://api.spotify.com/v1/artist`, {
    method: 'GET',
    headers: {'Authorization' : 'Bearer ' + token}
  });

  const data = await result.json();
  return data.artists.items;
}

// var fetchTracks = function (artistId, callback) {
//   $.ajax({
//       url: 'https://api.spotify.com/v1/artists/' + artistId,
//       success: function (response) {
//           callback(response);
//       }
//   });
// };