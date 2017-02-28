var productImagesNames = [bag, banana


  var productArry = [];
//constructor
  function Products(name){
    this.name = name;
    this.path = './assets/' + name + ' .jpg':
    this.votes = 0;
    productsArray.push(this);
  }

  //iife building each of our products
  (function()){
    for(var i=0;i<productImagesNames.length; i++
      new Proudcts(productImagesNames[i]);
    }
  })()
//properties startout with null value
  var tracker={
    imageOneEl:documentElementById('img-one'),
    imageTwoEl:documentElementById('imge-two'),
    imageThreeEl:documentElementById('img-three'),
    imgObjOne:null,
    ImgObjTwo:null,
    ImgObjThree:null,
    imageContainer:documentElementById('image-container')//put this in html
    //clicks here
    showResultsEl:documentElementById('showresults'),
    resultsEl.documentElementById(
      'results'
      clicks:1,
    )

    getRandomIndex:function(){
      return Math.floor(Math.random() * productsArray.length);
    },

    displayImages:function()
    {
      this.iamgeObjOne=productsArray{this.getRandomIndex()];


        this.imageObjTwo=productsArray{this.getRandomIndex()];
          this.imageThreeElsrc=productsArray{this.getRandomIndex()].path;

        //refactor and prevent dups
          }

          if (this.imgObjOne ===this.imgObjTwo||this.imgObjOne===this.displayImages();


this.imgageOneEl.src=this.imgObjOne.path;
this.imageOneEl.id= this.imgObjOne.name;
this.imgageOneEl.src=this.imgObjTwo.path;
this.imageOneEl.id= this.imgObjTwo.name;
this.imgageOneEl.src=this.imgObjThree.path;
this.imageOneEl.id= this.imgObjThree.name;
},

 checkClicks:function(){
   if (this.clicks> 14){
     this.imageContainer.removeEventListener('click',this.clickHandler );
     this.showresultel.addeventlisterner(click, function(e{
       e.preventDefault();
       tracker.renderResults();
     }))

   }

clickHandler:function(e){
  this.checkClicks();
  if(e.target.id===tracker.imgObjOne.name ||
    e.targe.id===tracker.imgObjTwo.name||
    e.target.id=== tracker.imgObjThree.name){}


  tracker.clicks++;
  tracker.tallyVotes(e.target.id);
  tracker. displayImage();
}
}
//so if elID is bag it will vote 1, if it's something else it will pass until it finds bag and then tallying it.  finding the object so it matches the clicked image....
tallyVotes:function(elId){
  for(var i in productsArray){
  //same as for (var i=0 etc.)

      if(elID ===productsArray[i].name){
        productsArray[i].votes =+1;

        return; //or break, stop iterating, we don't need to go any further.
      }
  }

}

renderResults: function(){
  //create UL
  //create each of the LIs and add content
  //append each li to the ul
  //apend the Ul to the dom and all of this happens on the button click

  var ulEl = document.createElemnt('ul';
for (var i in productsArray){
  var liEl = document.createElement('li')
;
liEl.textContent = productsArray[i].name + ':' + prouductsArray[i].votes;
ulEl.appendChild(liEl);
}
this.resultEl.appendChild(ulEl);
}
 };
//event is listening to image and section


 tracker.imageContainer.addEventListener('click', tracker.clickHandler);


//e.target.id is the image itself- it's in the id on html - image one or two or three

 tracker.displayImages();

 //track votes(clicks)

 //once we click 15 the button will show results

 //in dev tools - console - tab that says event listener

 //look at wireframe
