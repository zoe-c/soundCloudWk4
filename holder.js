
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
                  // console.log(data);

                  let tracks = data;
                  // console.log(tracks);

                  var clientId = "/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94";
                  function renderTracks() {
                     return `
                        ${tracks.map(track =>
                           `<ul class="track">
                            <li>
                              <button class="audioTrigger" type="button" name="${track.stream_url}${clientId}">
                                 <img src="${track.artwork_url}" alt="oops!-caught-in-the-cloud">
                              </button>
                            </li>
                            <li>${track.title}</li>
                            <li>${track.user.username}</li>
                            </ul>
                            `).join('')}
                     `;
                  }
                  // console.log(renderTracks());

                  let markup = `${renderTracks()}`;
                  document.getElementById('searchResults').innerHTML = markup;


            //Make sure triggers are working// stored in triggers array.
                  var triggers = document.getElementsByClassName('audioTrigger');
                  console.log(triggers);


            //FIND A WAY TO ITERATE OVER THE ARRAY AND GET THE BUTTON TO ANNOUNCE WHICH INDEX IT IS...OR TO PRINT THE EXACT TRACK's NAME ATTRIBUTE (WHERE YOU'VE STORED THE CORRECTLY FORMATTED STREAM URL FOR YOUR AUDIO) (l-104)
                  var parent = document.getElementById('bodyWrap').addEventListener('click', function (event) {
                     event.target = triggers;
                     console.log("getting closer!");

                     var audioSRC = document.getElementById('audio').getAttribute("src");
                     console.log(audioSRC);

                     // // for (var i = 0; i <= triggers.length - 1; i++) {
                     //    if (event.target ===  && event.target.class === 'audioTrigger') {
                     //       // event.target = triggers[i];
                     //       return event.target.name;
                     //    }
                     //    console.log(event.target.name);


                     //****************************************ATTEMPT***************************************
                     // var audioWrap = document.getElementById('audioWrap');
                     // triggers.map(trigger => trigger.addEventListener('click', function (event) {
                     //    event.target = audioWrap;
                     //    var newAudio = `<audio src="${track.stream_url}${clientId}" controls= "controls"></audio>`
                     //    audioWrap.prepend(newAudio);
                     //
                     // }));

                     // function audioLink(){
                     //    var audio = document.getElementById('audio').setAttribute("src", triggers.name);
                     //    console.log(audio.src);
                     // }


                  });


                  // function audioConnect() {
                  //    var audio = document.getElementById('audio');
                  //    var audioTrigger = document.getElementsByClassName('audioTrigger');
                  //    audioTrigger.addEventListener('click', function (event) {
                  //       if (e.target.class === "audioTrigger") {
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


               });


            }
         )

        .catch(function(err) {
         console.log('Fetch Error :-S', err);
       });


});

//ADD EVENT LISTENER TO PAGE FOR ENTER KEY PRESS
