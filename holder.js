
console.log("hola!");

// KEYS:
// https://api.soundcloud.com/tracks/15578191/stream/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94
// <li><audio src="${track.stream_url}${clientId}" controls= "controls"></audio><li>

//Global Variables------------------------------------------------------
var searchInput = document.getElementById('searchInput');
var submitButton = document.getElementById('submitButton');
var searchResults;

   //Submit Event
submitButton.addEventListener('click', function e(event) {

      let addToFetch = searchInput.value;
      fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + addToFetch)
        .then(
           function(response){
              if (response.status != 200) {
                 console.log("FIRE ANTS! Error: " + response.status);
                 return;
               }

               response.json().then(function(data) {
                  let tracks = data;
                  var clientId = "/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94";
                  function renderTracks() {
                     return `
                        ${tracks.map(track =>
                           `<ul class="track">
                            <li>
                              <button class="audioTrigger" type="button">
                                 <img src="${track.artwork_url}" alt="oops!-caught-in-the-cloud" id="${track.stream_url}${clientId}">
                              </button>
                            </li>
                            <li class="title">${track.title}</li>
                            <li class="band">${track.user.username}</li>
                            </ul>
                            `).join('')}
                     `;
                  }

                  let markup = `${renderTracks()}`;
                  document.getElementById('searchResults').innerHTML = markup;

                  var triggers = document.getElementsByClassName('audioTrigger');
                  var parent = document.getElementById('searchResults').addEventListener('click', function (event) {
                     event.target = triggers;
                     let playTrack = `<audio src="${event.target.id}" id="audio" controls="controls"></audio>`
                     return document.getElementById('audioWrap').innerHTML = playTrack

                  });

               });


            }
         )

        .catch(function(err) {
         console.log('Fetch Error :-S', err);
       });


});


// NEED A WAY TO CLEAN UP THE CLICK LISTENER ON THE
