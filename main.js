console.log("hola!");

// KEYS:
// https://api.soundcloud.com/tracks/15578191/stream/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94
// <li><audio src="${track.stream_url}${clientId}" controls= "controls"></audio><li>

//Global Variables------------------------------------------------------
var searchInput = document.getElementById('searchInput');
var submitButton = document.getElementById('submitButton');
var searchResults;
   // console.log(searchInput);
   // console.log(submitButton);
   // console.log(searchResults);

   //Submit Event
submitButton.addEventListener('click', function e(event) {

   //NEED A BETTER WAY TO FILTER/ FORMAT INPUT VALUE TO BROADEN SEARCH RESULTS
   //DIFFERENT RESULTS COME BACK// SEARCH IS CASE SENSITIVE.
   //ASK ABOUT THIS//*EDIT*/ >>>> asked about it.leave it as is for now. when fetching from an api, you cannot really change what/ how their system is programmed to return results...save this for later.
   // ----------------CLEANUP v1---------------------------------------
   // let dirtySearch = searchInput.value;
   // console.log(dirtySearch);
   //
   //    let cleanSearch = dirtySearch.toLowerCase();
   //    console.log(cleanSearch);
   //
   //    let addToFetch = cleanSearch;
   //    console.log(addToFetch);

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

                     //assign results to tracks
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


// -----NOTE:FUNCTION TO LINK TO AUDIO. USE bodyWrap DIV AS THE PARENT// HANDLER. USE THE LI BUTTON IMG BE THE TARGET.
            //optionA)upon click, make separate event to replace audio tag with that track's audio tag?
            //optionB)when you renderTracks above, have the audio wrap render HIDDEN VIEW audio tags for each button? then attach      listeners that trigger the VIEW UNHIDDEN for the user to use?
            // optionC) THIS IS WHAT YOU'VE BEEN TRYING TO DO: STORE CORRECTLY FORMATTED STREAM_URL IN THE BUTTON "NAME" ATTRIBUTE>> GRAB THAT ATTRIBUTE WHEN CLICKED AND ASSIGN IT TO THE AUDIO's SRC ATTRIBUTE. strange, but seemed much more do-able and here we are.



            //Make sure triggers are working// stored in triggers array.
                  var triggers = document.getElementsByClassName('audioTrigger');
                  console.log(triggers);




            //Grab the name attributes of each button (that store the stream_url and client id IN FORMAT ALREADY) to pass to the src of the audio tag.
            //       var trigNameArray = [];
            //       function grabNameArray(triggers) {
            //          // let tempArray = [];
            //          let i;
            //          for (i = 0; i <= triggers.length - 1; i ++) {
            //             // tempArray.push( triggers[i].getAttribute('name'));
            //             trigNameArray.push(triggers[i]).name;
            //          }
            //          return trigNameArray;
            //       }
            //
            //       var trigNameArray = grabNameArray(triggers);
            //       console.log(trigNameArray);



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
