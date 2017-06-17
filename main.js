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
   let dirtySearch = searchInput.value;
   // let cleanSearch = "";
   console.log(dirtySearch);

      let cleanSearch = dirtySearch.toLowerCase();
      console.log(cleanSearch);


      let addToFetch = cleanSearch;
      console.log(addToFetch);


      fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + addToFetch)
        .then(
           function(response){
              if (response.status != 200) {
                 console.log("WHOA! Error: " + response.status);
                 return;
               }

               response.json().then(function(data) {
                console.log(data);
               //  console.log(data.results);

                //assign results to tracks
                let tracks = data;
                console.log(tracks);

                function renderTracks() {
                  return `
                  <div id="searchResults">
                     ${tracks.map(track =>
                        `<ul class="track">
                         <li><img src="${track.artwork_url}" alt="album-art-image"></li>
                         <li>${track.title}</li>
                         <li>${track.user.username}</li>
                         </ul>
                         `).join('')}
                  </div>
                  `;
               }
                        console.log(renderTracks());

               let markup = `${renderTracks()}`;
               document.getElementById('searchResults').innerHTML = markup;



               });


            }
         )

        .catch(function(err) {
         console.log('Fetch Error :-S', err);
       });


});
