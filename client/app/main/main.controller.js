'use strict';

angular.module('pertsPrintApp')
  .controller('MainCtrl', function ($scope, $http) {

    // Dumby data for charts

    var data1 = [3/17 * 100, 4/17 * 100, 10/17 * 100];
    var data2 = [1/16 * 100, 7/16 * 100, 8/16 * 100];
    var data3 = [5/15 * 100, 3/15 * 100, 7/15 * 100];
    var data4 = [65, 28, 35];

    // Drawing pie charts in figure 1

    PertsPie("firstChart", data1);
    PertsPie("secondChart", data2);
    PertsPie("thirdChart", data3);

    // Drawing bar graph in figure 2

    PertsBar("barOne", 'Mindset Distributions', data4);

    // Drawing pie charts in figure 3

    PertsPie("chart4", data1);
    PertsPie("chart5", data2);
    PertsPie("chart6", data3);

    // Function to display Pie Chart with data labels

    function PertsPie(chartId, data) {
      var formattedData = formatPieData(data);
      var ctx = document.getElementById(chartId).getContext("2d");
      // create chart using Chart.js
      var chart = new Chart(ctx).PieLabeled(formattedData, []);
      // remove added height and width to keep chart responsive
      document.getElementById(chartId).removeAttribute("style");
    }

    // Function to display Bar Graph

    function PertsBar(chartId, title, data) {
      var formattedData = formatBarData(title, data);
      var ctx = document.getElementById(chartId).getContext("2d");
      // create chart using Chart.js
      var chart = new Chart(ctx).Bar(formattedData, {barDatasetSpacing : 8});
      // remove added height and width to keep chart responsive
      document.getElementById(chartId).removeAttribute("style");
    }

    // Function to format array of data for Pie Charts

    function formatPieData(data) {
      var redColor = '#ee5b40',
          yellowColor = '#fff44f',
          greenColor = '#a3cf63';
          
      return [
        {
          value: data[0],
          color: redColor
        },
        {
          value: data[1],
          color: yellowColor
        },
        {
          value: data[2],
          color: greenColor
        }
      ];
    }

    // Function to format array of data for Bar Graphs

    function formatBarData(title, data) {
      var redColor = '#ee5b40',
          yellowColor = '#fff44f',
          greenColor = '#a3cf63';

      return {
        labels: [title],
        datasets: [
          {
            label: '',
            fillColor: redColor,
            strokeColor: redColor,
            data: [data[0]]
          },
          {
            label: '',
            fillColor: yellowColor,
            strokeColor: yellowColor,
            data: [data[1]]
          },
          {
            label: '',
            fillColor: greenColor,
            strokeColor: greenColor,
            data: [data[2]]
          }
        ]
      };
    }

  });
