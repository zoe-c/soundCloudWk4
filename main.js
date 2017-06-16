console.log("hola!");

//ELEMENTS INTO VARIABLES
var audio = document.getElementById('audio');
var searchWrap = document.getElementById('searchForm');
var searchText = document.getElementById('searchText');
var searchButton = document.getElementById('searchButton');
var searchResults = document.getElementById('searchResults')

console.log(audio);
console.log(searchWrap);
console.log(searchText);
console.log(searchButton);
console.log(searchResults);

(function () {
   'use strict';

  fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=')
   .then(
      function(response){
      if (response.status != 200) {
         console.log("WHOA! Error: " + response.status);
         return;
      }
      response.json().then(function(data) {
         console.log(data);

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



})();
