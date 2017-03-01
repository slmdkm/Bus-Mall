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

//Now create Constructor Function
function ProductsConstructor(name, filepath, tally, views) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.tally = 0;//number of clicks
  this.views = 0;//number of times shown
  allProducts.push(this);
}

//IIFE to build all the products.
(function createImageAlbum() {
  for (var i = 0; i < allProductsNames.length; i++) {
    new ProductsConstructor(allProductsNames[i]);
  }

  console.log(allProducts);
})();

//createImageAlbum();

//Properties: Begin with a null value.
var tracker = {
  imageOneEl: document.getElementById('img1'),
  imageTwoEl: document.getElementById('img2'),
  imageThreeEl: document.getElementById('img3'),
  imgObjOne: null,
  imgObjTwo: null,
  ImgObjThree: null,

  imageAlbumEl: document.getElementById('ImageAlbum'),

  //Image Album is an ID in HTML

  //Button ID
  showResultsEl: document.getElementById('Show Results'),

  //Aside ID
  resultsEl: document.getElementById('View Results'),

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
      e.target.id === tracker.imgObjectThree) {

        tracker.clicks++;
        tracker.tallyVotes(e.target.id);
        tracker.displayImages();
      }
    },

  //so if elId is a bag it will vote 1, if it's something else it will pass until it finds bag and then tallies it.  It is finding the object so it matches the clicked image....


  tallyVotes: function (elId) {
    for (var i in allProducts) {
      if (elId === allProducts[i].name) {
        allProducts[i].votes += 1;
        console.log(allProducts[i]);

        //Breaks, it's stop iterating, we don't need to go any further.

        break;
      }
    }
  },

  renderResults: function () {
    //createUL
    //creat each of the LI and add content
    //append each li to the ul
    //append the ul to the dom and all of this happens on the button click.

    var ulEl = document.createElement('ul');

    //same as for loop: for )var i=0 etc.
    for (var i in allProducts) {
      var liEl = document.createElement('li');

      liEl.textContent = allProducts[i].name + ':' + allProducts[i].votes;
      ulEl.appendChild(liEl);
    }

    this.resultEl.appendChild(ulEl);
  },
};

//Event is listening to image and section
tracker.imageAlbumEl.addEventListener('click', tracker.clickHandler);

tracker.displayImages();

// var button= document.getElementById('Vote Button');
// console.log(button);
//
// button.addEventListener('click', function(event){
//   console.log('hit here?');
//   random_imglink();
// });
//
// function random_imglink(){

//This is my storage bank before I created the Image Album.
//   var myImages= [
//     {src:'img/bag.jpg'},
//   {src:'img/banana.jpg'},
//   {src:'img/bathroom.jpg'},
//   {src:'img/boots.jpg'},
//   {src:'img/breakfast.jpg'},
//   {src:'img/bubblegum.jpg'},
//   {src:'img/chair.jpg'},
//   {src:'img/cthulhu.jpg'},
//   {src:'img/dog-duck.jpg'},
//   {src:'img/dragon.jpg'},
//   {src:'img/pet-sweep.jpg'},
//   {src:'img/pen.jpg'},
//   {src:'img/scissors.jpg'},
//   {src:'img/shark.jpg'},
//   {src:'img/sweep.jpg'},
//   {src:'img/tauntaun.jpg'},
//   {src:'img/unicorn.jpg'},
//   {src:'img/usb.jpg'},
//   {src:'img/water-can.jpg'},
//   {src:'img/wine-glass.jpg'}
// ];

// img1: documentElementById('img1',[0]),
// img2: documentElementById('img2',[1]),
// img3: documentElementById('img3',[2])


// Calling all products in array and changing the filepath.

// var changeFilepath = [];
// for (var i = 0; i <  allProducts.length; i++) {
//   changeFilepath[i] = new Image();
//   changeFilepath[i].src = allProducts[i].filepath;
// }

// //Create random image number
// function getRandomInt(min,max)
// {
//   //return Math.floor(Math.random() * (max - min + 1)) + min;
//
//   sam = Math.floor(Math.random() * (max - min + 1)) + min;
//   return changeFilepath[sam];
// }
//
// //Removes the previous images.
// var images = document.getElementsByTagName('img');
// for (var p = 0; p < images.length; p++) {
//   images[p].parentNode.removeChild(images[p]);}
//
//
//
// // for (var i = 0; i < 3; i++) {
// //   // 0 being the first image and changeFilepath.length - 1 is  last image.
// //   var newImage = getRandomInt(0, changeFilepath.length - 1);
// //   //Displays the image.
// //   document.body.appendChild(newImage);
// //   //console.log('newImage: ', newImage);
// // }
