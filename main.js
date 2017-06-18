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


//ELEMENTS INTO VARIABLES
var audio = document.getElementById('audio');
// var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');
var submitButton = document.getElementById('submitButton');
// var fetchAddress = "";


   console.log(audio);
   // console.log(searchForm);
   console.log(searchInput);
   console.log(submitButton);
   console.log(searchResults);

   //submit event
submitButton.addEventListener('click', function (event) {
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

                  function renderTracks() {
                     return `
                        ${tracks.map(track =>
                           `<ul class="track">
                            <li><img src="${track.artwork_url}" alt="album-art-image"></li>
                            <li><a href="#" class="audioTrigger">${track.title}</a></li>
                            <li>${track.user.username}</li>
                            </ul>
                            `).join('')}

                     `;
                  }
                  console.log(renderTracks());


                  let markup = `${renderTracks()}`;
                  document.getElementById('searchResults').innerHTML = markup;

                  //check each stream_url and waveform_url..find out which one you need to send to audio src
                  for (track of tracks) {
                     console.log (track.stream_url);
                     console.log(track.waveform_url);
                  }



                  // let audioTrigger = document.querySelectorAll('a');
                  // for (i = 0; i <= audioTrigger.length - 1; i++) {
                  //    audioTrigger[i].addEventListener('click', function(event) {
                  //    audio.src = "${tracks.track.stream_url} + /?client_id=86b6a66bb2d863f5d64dd8a91cd8de94";
                  //    fetch(${tracks.track.stream_url})
                  //    });
                  // }

               });


            }
         )

        .catch(function(err) {
         console.log('Fetch Error :-S', err);
       });


});
