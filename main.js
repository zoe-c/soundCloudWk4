console.log("hola!");
/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play



//ELEMENTS INTO VARIABLES
var audio = document.getElementById('audio');
var searchForm = document.getElementById('searchForm');
var searchText = document.getElementById('searchText');
var submitButton = document.getElementById('submitButton');
var searchResults = document.getElementById('searchResults');
// var fetchAddress = "https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=";
var addToFetch = '';


console.log(audio);
console.log(searchForm);
console.log(searchText);
console.log(submitButton);
console.log(searchResults);







submitButton.addEventListener('click', function (event){
   addToFetch = searchText.value.toString();
   console.log(addToFetch);

   let fetchAddress = "https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=" + addToFetch;
   console.log(fetchAddress);

  fetch(fetchAddress)
   .then(
      function(response){
      if (response.status != 200) {
         console.log("NOT IN MY YARD: ERROR: " + response.status);
         return;
      }

      response.json().then(function(data) {
         console.log(data);

         let tracks = data.results;
         console.log(tracks);

         function renderTracks() {
            // let track = tracks[0];
            for (track of tracks)
            return `
               <ul class="tracks"


            `
         }









         // //assign results to customers
         // let customers = data.results;
         // console.log(customers);

         // //create a function to pull "cus"
         // function renderCustomers(){
         //    // let customer = customers[0];
         //    // for (i = 0; i <= customers.length-1; i++) {
         //    return `
         //    <div class= "customers">
         //      ${customers.map(customer =>
         //          `<ul>
         //             <li><img src="${customer.picture.large}" alt="customer-photo"></li>
         //             <li class= "customer-name">${customer.name.first} ${customer.name.last}</li>
         //             <li class= "customer-email">${customer.email}</li>
         //             <li class= "address">
         //               <p>${customer.location.street}</p>
         //               <p>${customer.location.city} , ${customer.location.state} ${customer.location.postcode}</p>
         //            </li>
         //            <li class= "phone">${customer.phone}</li>
         //         </ul>`
         //       ).join('')}
         //    </div>
         //    `;
         // }
         // console.log(renderCustomers());
         //
         // let markup = `
         //      <div class= "title"> INTERNAL COMPANY DIRECTORY </div>
         //       ${renderCustomers()}
         //      `
         // document.body.innerHTML = markup;

      });


   })
   .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });



});
