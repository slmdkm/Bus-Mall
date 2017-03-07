//Scott's suggestions:
// 1. Generate three random, non-dupe images (part of the controller)
// 2. Object constructor for Products:
//   a. Include name, path, votes
// 3. A tracker object that will controll functionality of app
// 4. Event listener(s) for image clicks
//   a.var productsArray = [];
//
//  function ProductsConstructor() {
//  }

// A simple IIFE to build all the product images
//  (function() {
//  build the objects
//  })()
//
//  var tracker = {
//  lots of properties and methods
//  }
//  someEl.addEventListener('click', function(e) {
//  does some stuff on click
//})


//Objects stored in an array.
var allProductsNames = ['bag',  'banana',  'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allProducts = [];
var clickChart = [];

//Now create Constructor Function
function ProductsConstructor(name, filepath, tally, views) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.tally = 0;//number of clicks
  this.views = 0;//number of times shown
  allProducts.push(this);

}

//IIFE to build all the products.
//(JSON - this builds each product object)
(function createImageAlbum() {
  for (var i = 0; i < allProductsNames.length; i++) {
    new ProductsConstructor(allProductsNames[i]);
  }
  //JSON - loads the numbers from local storage
  var stringifiedAllProducts =
  localStorage.getItem('stringifiedAllProducts');
  var parsedAllProducts = JSON.parse(stringifiedAllProducts);
  console.log(stringifiedAllProducts);
  console.log(parsedAllProducts); // old products with counts from last time
  console.log(allProducts); // new products with zeroes
  // JSON - corrects the counts on the product object with the count from local storage.
  if (typeof(localStorage.getItem('stringifiedAllProducts')) === 'string') {
    for (var i = 0; i < parsedAllProducts.length; i++) {
      console.log('new product: ', allProducts[i]);
      console.log('old product: ', parsedAllProducts[i]);
      allProducts[i].tally = parsedAllProducts[i].tally;
    }}
  })();





  //Properties: Begin with a null value.
  var tracker = {
    imageOneEl: document.getElementById('img1'),
    imageTwoEl: document.getElementById('img2'),
    imageThreeEl: document.getElementById('img3'),
    imgObjOne: null,
    imgObjTwo: null,
    ImgObjThree: null,
    chartImages:[],
    chartTally:[],

    imageAlbumEl: document.getElementById('ImageAlbum'),

    //Image Album is an ID in HTML

    //Button ID
    showResultsEl: document.getElementById('Show-Results'),

    //Aside ID
    resultsEl: document.getElementById('View-Results'),

    //Show Results is an Id in HTML

    clicks: 1,

    getRandomInt: function () {
      return Math.floor(Math.random() * allProducts.length);
    },

    displayImages: function () {
      this.imgObjectOne = allProducts[this.getRandomInt()];
      this.imgObjectTwo = allProducts[this.getRandomInt()];
      this.imgObjectThree = allProducts[this.getRandomInt()];

      //This refactors and prevents dups
      if (this.imgObjectOne === this.imgObjectTwo ||
        this.imgObjectOne === this.imgObjectThree ||
        this.imgObjectTwo === this.imgObjectThree) {
          this.displayImages();
        }

        this.imageOneEl.src = this.imgObjectOne.filepath;
        this.imageOneEl.id = this.imgObjectOne.name;
        this.imageTwoEl.src = this.imgObjectTwo.filepath;
        this.imageTwoEl.id = this.imgObjectTwo.name;
        this.imageThreeEl.src = this.imgObjectThree.filepath;
        this.imageThreeEl.id = this.imgObjectThree.name;
      },

      checkClicks: function () {
        if (this.clicks > 14) {
          this.imageAlbumEl.removeEventListener('click', this.clickHandler);
          this.showResultsEl.addEventListener('click', function (e) {
            e.preventDefault();
            tracker.renderResults();
          });
        }
      },

      clickHandler: function (e) {
        tracker.checkClicks();
        if (e.target.id === tracker.imgObjectOne.name ||
          e.target.id === tracker.imgObjectTwo.name ||
          e.target.id === tracker.imgObjectThree.name) {

            tracker.clicks++;
            tracker.tallyVotes(e.target.id);
            tracker.displayImages();
          }

          dataSet1();
          localStorage.setItem('stringifiedAllProducts', JSON.stringify(allProducts));
        },

        //so if elId is a bag it will vote 1, if it's something else it will pass until it finds bag and then tallies it.  It is finding the object so it matches the clicked image....


        tallyVotes: function (elId) {
          for (var i in allProducts) {
            if (elId === allProducts[i].name) {
              allProducts[i].tally += 1;
              console.log(allProducts[i]);

              //Breaks, it's stop iterating, we don't need to go any further.

              break;
            }
          }
        },

        renderResults: function () {
          console.log('renderResults just got called');
          //createUL
          //creat each of the LI and add content
          //append each li to the ul
          //append the ul to the dom and all of this happens on the button click.

          var ulEl = document.createElement('ul');

          //same as for loop: for )var i=0 etc.
          for (var i in allProducts) {
            var liEl = document.createElement('li');

            liEl.textContent = allProducts[i].name + ':\t\t\t\t' + allProducts[i].tally + ' votes';
            ulEl.appendChild(liEl);
          }

          this.showResultsEl.appendChild(ulEl);
          drawChart();
        },
      };

      function dataSet1(){
        console.log('dataSet1 just got called');
        for (var i=0; i < allProducts.length; i++){
          clickChart[i]= allProducts[i].tally;
        }
        console.log('clickChart: ', clickChart);
      }

      //Event is listening to image and section
      tracker.imageAlbumEl.addEventListener('click', tracker.clickHandler);

      tracker.displayImages();

      //JSON
      // localStorage.clear();
      localStorage.getItem('stringifiedAllProducts');
