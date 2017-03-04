'use strict';

// //1.Charts
function addDataChart(){
  // for (var i in allProducts){

  for (var i =0; i < allProducts.length; i++){
    this.chartLabels[i] = allProducts[i].name;
    this.chartTally[i] = allProducts[i].tally;
  }
}


  // 2.var myChart = document.getElementById("myChart");
  //var ctx = myChart.getContext ('2d');

  var ctx = document.getElementById('myChart').getContext('2d');

  // 3.tracker.addChartData();

  // tracker.addDataChart();
  //  myChart.data.datasets[0].data.push(this.tally);
  //  => will get you the data array

  //5.This is an object literal
  var myChart = new Chart(ctx,{

    //6.type of property, the type of chart is the bar
    type: 'bar',

    //7.data property,
    data: {

    //8.productImageNames-this will hold the name of each product image
      // labels:
      // tracker.chartLabels,

      labels:['bag',  'banana',  'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],


      //array of 1 object, and more properites, this is a nested layer of objects.

      datasets: [{

        //Data starts with zeros and then increments

        label: '# of Votes',
        //Holds tally for each product image

        // data: tracker.chartTally,
        data: [1,2,3,4,5,6,7,8,9],



        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,

      }]
    },

  });
