// Author: noraj (Alexandre ZANNI)
var ctx = document.getElementById("xss");
// XSS type labels
var xonload = 'Onload';
var interaction = 'Interaction';
var xself = 'Self';
var dom = 'DOM-based';
var reflected = 'Reflected';
var stored = 'Stored';
var universal = 'Universal';
// Graph colors
var tomato = [
  'hsla(9, 100%, 75%, 1)',
  'hsla(9, 100%, 64%, 1)',
  'hsla(9, 100%, 50%, 1)'
]; // Tomato
var tomatobis = [
  'hsla(9, 100%, 75%, 0.7)',
  'hsla(9, 100%, 64%, 0.7)',
  'hsla(9, 100%, 50%, 0.7)'
];
var limegreen = [
  'hsla(120, 61%, 65%, 1)',
  'hsla(120, 61%, 50%, 1)',
  'hsla(120, 61%, 35%, 1)'
]; // LimeGreen
var limegreenbis = [
  'hsla(120, 61%, 65%, 0.7)',
  'hsla(120, 61%, 50%, 0.7)',
  'hsla(120, 61%, 35%, 0.7)'
];
var dodgerblue = [
  'hsla(210, 100%, 70%, 1)',
  'hsla(210, 100%, 56%, 1)',
  'hsla(210, 100%, 45%, 1)'
]; // DodgerBlue
var dodgerbluebis = [
  'hsla(210, 100%, 70%, 0.7)',
  'hsla(210, 100%, 56%, 0.7)',
  'hsla(210, 100%, 45%, 0.7)'
];
// Global color
var textColor = '#a6a6a6';
var bgColor = 'rgb(24, 26, 27)';
// Data
var data = {
  datasets: [{
    borderColor: bgColor,
    data: [10, 10, 10, 10, 10, 10],
    label: xself,
    labels: [
      universal,
      universal,
      stored,
      stored,
      reflected,
      reflected
    ],
    backgroundColor: [
      tomato[0], tomatobis[0],
      limegreen[0], limegreenbis[0],
      dodgerblue[0], dodgerbluebis[0]
    ]
  },
  {
    borderColor: bgColor,
    data: [10, 10, 10, 10, 10, 10],
    label: interaction,
    labels: [
      universal,
      universal,
      stored,
      stored,
      reflected,
      reflected
  ],
    backgroundColor: [
      tomato[1], tomatobis[1],
      limegreen[1], limegreenbis[1],
      dodgerblue[1], dodgerbluebis[1]
    ]
  },
  {
    borderColor: bgColor,
    data: [10, 10, 10, 10, 10, 10],
    label: xonload,
    labels: [
      universal,
      universal,
      stored,
      stored,
      reflected,
      reflected
    ],
    backgroundColor: [
      tomato[2], tomatobis[2],
      limegreen[2], limegreenbis[2],
      dodgerblue[2], dodgerbluebis[2]
    ]
  },
  ],
  labels: [
    'Universal',
    'DOM-based Universal',
    'Stored',
    'DOM-based Stored',
    'Reflected',
    'DOM-based Reflected',
  ],
  dom: [
    false,
    true,
    false,
    true,
    false,
    true
  ]
};

var options = {
  tooltips: {
    enabled: true,
    displayColors: false,
    callbacks: {
      label: function (item, data) {
        var x = data.dom[item.index];
        if (x === true)
          return 'Client XSS';
        else if (x === false)
          return 'Server XSS';
      },
      afterLabel: function (item, data) {
        var x = data.datasets[item.datasetIndex].labels[item.index];
        if (x === reflected)
          return 'Non-Persistent';
        else if (x === stored)
          return 'Persistent';
      },
/*      title: function (item, data) {
        var title = data.datasets[item[0].datasetIndex].label;
        return title;
      },
      beforeTitle: function (item, data) {
        var x = data.dom[item[0].index];
        if (x === true)
          return dom;
        else if (x === false)
          return false;
      },
      afterTitle: function (item, data) {
        var x = data.datasets[item[0].datasetIndex].labels[item[0].index];
        return x;
      },*/
    }
  },
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: textColor
    }
  },
  title: {
    display: true,
    position: 'top',
    text: ['XSS classification model', 'Types of Cross-Site Scripting'],
    fontSize: 30,
    fontColor: textColor
  },
  plugins: {
    labels: [{
      render: 'label',
      arc: true,
      position: 'outside',
      fontColor: 'white'
    }, {
      render: function (item) {
        var title = item.dataset.label;
        return title;
      },
      arc: true,
      position: 'default',
      fontColor: bgColor
    }]
  }
};

var pieChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
})
