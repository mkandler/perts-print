'use strict';

angular.module('pertsPrintApp')
  .controller('MainCtrl', function ($scope, $http) {

    var data1 = [
        {
          value: 3/17 * 100,
          color:"#ee5b40",
          highlight: "#ee5b40",
          label: "Red"
        },
        {
          value: 4/17 * 100,
          color: "#fff44f",
          highlight: "#fff44f",
          label: "Yellow"
        },
        {
          value: 10/17 * 100,
          color: "#a3cf63",
          highlight: "#a3cf63",
          label: "Green"
        }
      ];

    var data2 = [
        {
          value: 1/16 * 100,
          color:"#ee5b40",
          highlight: "#ee5b40",
          label: "Red"
        },
        {
          value: 7/16 * 100,
          color: "#fff44f",
          highlight: "#fff44f",
          label: "Yellow"
        },
        {
          value: 8/16 * 100,
          color: "#a3cf63",
          highlight: "#a3cf63",
          label: "Green"
        }
      ];

    var data3 = [
        {
          value: 5/15 * 100,
          color:"#ee5b40",
          highlight: "#ee5b40",
          label: "Red"
        },
        {
          value: 3/15 * 100,
          color: "#fff44f",
          highlight: "#fff44f",
          label: "Yellow"
        },
        {
          value: 7/15 * 100,
          color: "#a3cf63",
          highlight: "#a3cf63",
          label: "Green"
        }
      ];

    var barOneData = {
      labels: ["Mindset Distrbution"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "#ee5b40",
          strokeColor: "#ee5b40",
          highlightFill: "#ee5b40",
          highlightStroke: "#ee5b40",
          data: [65]
        },
        {
          label: "My Second dataset",
          fillColor: "#fff44f",
          strokeColor: "#fff44f",
          highlightFill: "#fff44f",
          highlightStroke: "#fff44f",
          data: [28]
        },
        {
          label: "My Third dataset",
          fillColor: "#a3cf63",
          strokeColor: "#a3cf63",
          highlightFill: "#a3cf63",
          highlightStroke: "#a3cf63",
          data: [28]
        }
      ]
    };


    PertsPie("firstChart", data1);
    PertsPie("secondChart", data2);
    PertsPie("thirdChart", data3);

    PertsPie("chart4", data1);
    PertsPie("chart5", data2);
    PertsPie("chart6", data3);

    PertsBar("barOne", barOneData);

    function PertsPie(chartId, data) {
      var ctx = document.getElementById(chartId).getContext("2d");
      var chart = new Chart(ctx).PieLabeled(data, []);
      document.getElementById(chartId).removeAttribute("style");
    }
    function PertsBar(chartId, data) {
      var ctx = document.getElementById(chartId).getContext("2d");
      var chart = new Chart(ctx).Bar(data, {barDatasetSpacing : 8});
      document.getElementById(chartId).removeAttribute("style");
    }

  });
