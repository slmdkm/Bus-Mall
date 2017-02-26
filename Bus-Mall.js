//Scott's suggestions:
// 1. Generate three random, non-dupe images (part of the controller)
// 2. Object constructor for Products:
//   a. Include name, path, votes
// 3. A tracker object that will controll functionality of app
// 4. Event listener(s) for image clicks
//   a.var productsArray = [];
//
//  function ProductsConstructor() {
//
//  }

// A simple IIFE to build all the product images
//  (function() {
//  build the objects
//  })()
//
//  var tracker = {
//  lots of properties and methods
//  }
//
//  someEl.addEventListener('click', function(e) {
//  does some stuff on click
//  })


//Objects stored in an array.
var allProductsNames = ['bag', 'banana', 'bathroom','boots','breakfast','bubblegum','chair','cthulhu', 'dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

var allProducts = [];

function ProductsConstructor(name, filepath, tally, views){
  this.name = name;
  this.filepath = filepath;
  this.tally = 0;//number of clicks
  this.views = 0;//number of times shown
  allProducts.push(this);
}

function createImageAlbum(){
  for (var i = 0; i < allProductsNames.length; i++) {
    new ProductsConstructor(allProductsNames[i], 'img/' + allProductsNames[i] + '.jpg');
  }
  console.log(allProducts);
}
createImageAlbum();



var button= document.getElementById('button');
console.log(button);

button.addEventListener('click', function(event){
  console.log('hit here?');
  random_imglink();
});

function random_imglink(){
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


//Calling all products in array and changing the filepath.
var preStuff = [];
for (var i = 0; i <  allProducts.length; i++) {
  preStuff[i] = new Image();
  preStuff[i].src = allProducts[i].filepath;
}

//Create random image number
function getRandomInt(min,max)
{
//return Math.floor(Math.random() * (max - min + 1)) + min;

sam = Math.floor(Math.random() * (max - min + 1)) + min;
  return preStuff[sam];
}

//Removes the previous images.
var images = document.getElementsByTagName('img');
for (var p = 0; p < images.length; p++) {
  images[p].parentNode.removeChild(images[p]);
}


for (var i = 0; i < 3; i++) {
  // 0 being the first image and preStuff.length - 1 is  last image.
  var newImage = getRandomInt(0, preStuff.length - 1);
  //Displays the image.
  document.body.appendChild(newImage);
  console.log('newImage: ', newImage);
}



}
