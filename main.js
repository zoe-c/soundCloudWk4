console.log("hola!");
/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `onSubmit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

// Form Submission
// You should use the onSubmit() method on your form. This will trap when the submit button was pressed, thus allowing you to write a handler function.
// You'll also need to use the .value on the input to get the current value after the submission has happened.
// Fetching Data
// You'll need to take the value from above and use that to build out your URL to send to SoundCloud. (don't forgot to send your API token as well)


//ELEMENT VARIABLES
// var audio = document.getElementById('audio');
// var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');
var submitButton = document.getElementById('submitButton');
// var fetchAddress = "";


   // console.log(audio);
   // console.log(searchForm);
   console.log(searchInput);
   console.log(submitButton);
   console.log(searchResults);

   //submit event
submitButton.addEventListener('click', function e(event) {
   //NEED A BETTER WAY TO FILTER/ SHAPE INPUT VALUE TO BROADEN SEARCH RESULTS
   //DIFFERENT RESULTS COME BACK// SEARCH IS CASE SENSITIVE.
   //ASK ABOUT THIS
   // ----------------CLEANUP ATTEMPT 1 VVVVVV------------------------------
   // let dirtySearch = searchInput.value;
   // // let cleanSearch = "";
   // console.log(dirtySearch);
   //
   //    let cleanSearch = dirtySearch.toLowerCase();
   //    console.log(cleanSearch);

      //
      // let addToFetch = cleanSearch;
      // console.log(addToFetch);

      let addToFetch = searchInput.value;
      fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + addToFetch)
        .then(
           function(response){
              if (response.status != 200) {
                 console.log("FIRE ANTS! Error: " + response.status);
                 return;
               }

               response.json().then(function(data) {
                  console.log(data);

                     //assign results to tracks
                  let tracks = data;
                  console.log(tracks);

                  var clientId = "/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94";
                  function renderTracks() {
                     return `
                        ${tracks.map(track =>
                           `<ul class="track">
                            <li><img src="${track.artwork_url}" alt="oops!-caught-in-the-cloud"></li>
                            <li class="li1">${track.title}</li>
                            <li class="li2">${track.user.username}</li>
                            <li><audio src="${track.stream_url}${clientId}" controls= "controls"></audio><li>
                            </ul>
                            `).join('')}

                     `;
                  }
                  console.log(renderTracks());


                  let markup = `${renderTracks()}`;
                  document.getElementById('searchResults').innerHTML = markup;

                  //check each stream_url and waveform_url..find out which one you need to send to audio src
                  // for (track of tracks) {
                     // console.log (track.stream_url);
                     // console.log(track.waveform_url);
                     // console.log(track.permalink_url);
                  //    console.log(track.id);
                  // }


                  // function audioConnect() {
                  //    var audio = document.getElementById('audio');
                  //    var audioTrigger = document.getElementsByClassName('audioTrigger');
                  //    audioTrigger.addEventListener('click', function (event) {
                  //       if (e.target.class == "audioTrigger") {
                  //          // audio.src = "https://api.soundcloud.com/tracks/" + ${track.id} + "/stream/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94";
                  //          // audio.src = "https://api.soundcloud.com/tracks/" + e.target.id + "/stream/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94" ;
                  //          // audio.src =  track.stream_url + client_id;
                  //          // audio.src += e.target.id + clientId;
                  //          let newSource = "https://api.soundcloud.com/tracks/" + e.target.id + clientIdForStream;
                  //          // audio.setAttribute("src", newSource);
                  //          audio.src = newSource;
                  //       }
                  //
                  //       console.log(audio.src)
                  //
                  //    })
                  //
                  //
                  // }


                     // https://api.soundcloud.com/tracks/15578191/stream/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94





               });


            }
         )

        .catch(function(err) {
         console.log('Fetch Error :-S', err);
       });


});

//ADD EVENT LISTENER TO PAGE FOR ENTER KEY PRESS
// var searchForm = document.getElementById('searchForm');
// function
