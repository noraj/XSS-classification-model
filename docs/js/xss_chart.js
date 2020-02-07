// Author: noraj (Alexandre ZANNI)
var ctx = document.getElementById('xss');
var ctx2 = document.getElementById('xss2');
var ctx3 = document.getElementById('xss3');
// XSS type labels
var xonload = 'Onload';
var interaction = 'Interaction';
var xself = 'Self';
var dom = 'DOM-based';
var reflected = 'Reflected';
var stored = 'Stored';
var universal = 'Universal';
var blind = 'Blind';
var mutated = 'Mutated';
var p2p = 'p2p';
// Graph colors
var orangered = [
  'hsla(16, 100%, 50%, 1)',
  'hsla(16, 100%, 50%, 1)',
  'hsla(16, 100%, 50%, 1)'
]; // OrangeRed
var tomato = [
  'hsla(9, 100%, 64%, 1)',
  'hsla(9, 100%, 64%, 1)',
  'hsla(9, 100%, 64%, 1)'
]; // Tomato
var coral = [
  'hsla(16, 100%, 66%, 1)',
  'hsla(16, 100%, 66%, 1)',
  'hsla(16, 100%, 66%, 1)'
]; // Coral
var darkorange = [
  'hsla(33, 100%, 50%, 1)',
  'hsla(33, 100%, 50%, 1)',
  'hsla(33, 100%, 50%, 1)'
]; // DarkOrange
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
    data: [5, 5, 5, 5, 10, 10, 10, 10],
    label: xself,
    labels: [
      universal,
      mutated,
      blind,
      p2p,
      stored,
      stored,
      reflected,
      reflected
    ],
    backgroundColor: [
      orangered[0], tomato[0], coral[0], darkorange[0],
      limegreen[0], limegreenbis[0],
      dodgerblue[0], dodgerbluebis[0]
    ]
  },
  {
    borderColor: bgColor,
    data: [5, 5, 5, 5, 10, 10, 10, 10],
    label: interaction,
    labels: [
      universal,
      mutated,
      blind,
      p2p,
      stored,
      stored,
      reflected,
      reflected
  ],
    backgroundColor: [
      orangered[1], tomato[1], coral[1], darkorange[1],
      limegreen[1], limegreenbis[1],
      dodgerblue[1], dodgerbluebis[1]
    ]
  },
  {
    borderColor: bgColor,
    data: [5, 5, 5, 5, 10, 10, 10, 10],
    label: xonload,
    labels: [
      universal,
      mutated,
      blind,
      p2p,
      stored,
      stored,
      reflected,
      reflected
    ],
    backgroundColor: [
      orangered[2], tomato[2], coral[2], darkorange[2],
      limegreen[2], limegreenbis[2],
      dodgerblue[2], dodgerbluebis[2]
    ]
  },
  ],
  labels: [
    'Universal',
    'Mutated',
    'Blind',
    'p2p',
    'Stored',
    'DOM-based Stored',
    'Reflected',
    'DOM-based Reflected',
  ],
  dom: [
    true,
    true,
    null,
    null,
    false,
    true,
    false,
    true
  ]
};

var data2 = {
  datasets: [{
    borderColor: bgColor,
    data: [10, 10, 10, 10],
    label: xself,
    labels: [
      stored,
      stored,
      reflected,
      reflected
    ],
    backgroundColor: [
      limegreen[0], limegreenbis[0],
      dodgerblue[0], dodgerbluebis[0]
    ]
  },
  {
    borderColor: bgColor,
    data: [10, 10, 10, 10],
    label: interaction,
    labels: [
      stored,
      stored,
      reflected,
      reflected
  ],
    backgroundColor: [
      limegreen[1], limegreenbis[1],
      dodgerblue[1], dodgerbluebis[1]
    ]
  },
  {
    borderColor: bgColor,
    data: [10, 10, 10, 10],
    label: xonload,
    labels: [
      stored,
      stored,
      reflected,
      reflected
    ],
    backgroundColor: [
      limegreen[2], limegreenbis[2],
      dodgerblue[2], dodgerbluebis[2]
    ]
  },
  ],
  labels: [
    'Stored',
    'DOM-based Stored',
    'Reflected',
    'DOM-based Reflected',
  ],
  dom: [
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
        else
          return '';
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
    text: ['XSS classification model [Full version]', 'Types of Cross-Site Scripting'],
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

var options2 = {
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
    text: ['XSS classification model [Simplified version]', 'Types of Cross-Site Scripting'],
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

var pieChart = new Chart(ctx2, {
  type: 'pie',
  data: data2,
  options: options2
})

var pieChart = new Chart(ctx3, {
  type: 'pie',
  data: data3,
  options: options3
})