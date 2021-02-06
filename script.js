/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

/**
 * The XYChart for transit schema
 */

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.padding(0, 0, 0, 0);

// Title
var title = chart.tooltipContainer.createChild(am4core.Label);
title.fill = am4core.color("#00254b");
title.fontSize = 25;
//title.width = am4core.percent(100);
//title.textAlign = "middle";
title.x = 10;
title.y = 10;

function createAxis(list) {
  var axis = list.push(new am4charts.ValueAxis());
  axis.min = 0;
  axis.max = 100;
  axis.strictMinMax = true;
  axis.renderer.grid.template.disabled = true;
  axis.renderer.labels.template.disabled = true;
  axis.renderer.baseGrid.disabled = true;
}

// Create axes
createAxis(chart.xAxes);
createAxis(chart.yAxes);

function createLine(name, color, data) {
  // Create series
  var series = chart.series.push(new am4charts.StepLineSeries());
  series.data = data;
  series.name = name;

  // Set up binding to data
  series.dataFields.valueX = "x";
  series.dataFields.valueY = "y";

  // Set up appearance
  series.stroke = color;
  series.strokeWidth = 4;
  series.connect = false;
  //series.tensionX = 0.5;
  //series.tensionY = 0.5;

  // Set up dash
  series.propertyFields.strokeDasharray = "dash";

  // Add bullets (stations)
  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.radius = 6;
  bullet.circle.fill = am4core.color("#fff");
  bullet.circle.stroke = am4core.color("#000");
  bullet.circle.strokeWidth = 2;
  bullet.circle.tooltipText = "{station}";

}

function createConnector(data) {
  // Create series
  var series = chart.series.push(new am4charts.LineSeries());
  series.data = data;
  series.hiddenInLegend = true;

  // Set up binding to data
  series.dataFields.valueX = "x";
  series.dataFields.valueY = "y";

  // Set up appearance
  series.stroke = am4core.color("#999");
  series.strokeWidth = 12;
  series.connect = false;

  // Add bullets (stations)
  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.radius = 6;
  bullet.circle.fill = am4core.color("#fff");
  bullet.circle.stroke = am4core.color("#000");
  bullet.circle.strokeWidth = 2;

  bullet.zIndex = -10;

}



createLine(
  "Ablage und Infrastruktur",
  am4core.color("#0075bf"),
  [{
    station: "Hier liegen Dateien, z.B. in Amazon S3 oder Microsoft Azure Storage. \nManche Dateien werden nie angefasst \n(z.B. solche, die wegen der Aufbewahrungsfristen abgelegt wurden).",
    x: 69,
    y: 12
  }, 
  {
    station: "Hier liegen strukturierte und unstrukturierte Dateien, \nz.B. in Amazon Lake Formation oder Microsoft Azure Data Lake. \nMit vielen davon soll etwas getan werden, z.B. eine Analyse.",
    x: 53,
    y: 15
  }, {
    station: "Z.B. von OracleDB, Google Cloud BigTable, SAP. \nHier liegen strukturierte Daten. Entweder weil sie strukturiert wurden oder weil z.B. \nein Formular so angelegt wurde, dass Kunden gar nicht anders können, \nals strukturierte Einträge zu hinterlassen.",
    x: 40,
    y: 20
  },
  {
    station: "Admiralty",
    x: 42,
    y: 24
  },]
);

createLine(
  "Endanwender-Reportings",
  am4core.color("#009e3d"),
  [{
    station: "Datenbanken, Data Lakes und \nWarehouses speisen die Big Data Analysen.",
    x: 50,
    y: 52
  }, {
    station: "z.B. von Snowflake, Amazon Synapse, SAP DW. \nHier werden aus verschiedenen Quellen \n(z.B. Datenbanken in Vertrieb und Logistik) Daten \n'angezapft' und für Analyse- und Reportingzwecke aufbereitet.",
    x: 55,
    y: 56
  }, {
    station: "Visualisierte Reportings und Analysen \nfür Endanwender, z.B. von Salesforce, Qlik, Tableau.",
    x: 72,
    y: 63
  },{
    station: "Mit strukturierten und unstrukturierten \nDaten lassen sich weitere Anwendungen durchführen.",
    x: 69,
    y: 62
  },]
);

createLine(
  "ML, AI und Co.",
  am4core.color("#97401d"),
  [{
    station: "Mit strukturierten und unstrukturierten \nDaten lassen sich weitere Anwendungen durchführen.",
    x: 69,
    y: 64
  }, {
    station: "Hadoop und Spark speisen mit \nihren Big-Data-Funktionen viele Anwendungen.",
    x: 69,
    y: 83
  }, {
    station: "Maschinelles Lernen mit strukturierten \noder, schwieriger, unstrukturierten Daten. \nOder das Trainieren einer künstlichen Intelligenz \nfür die Gesichtserkennung auf Basis von Fotos. \nGoogle AutoML Vision, AWS Image Recognition.",
    x: 74,
    y: 88
  }, ]
);

createLine(
  "Big Data Analytics",
  am4core.color("#e30613"),
  [ {
    station: "Hadoop und Spark speisen mit \nihren Big-Data-Funktionen viele Anwendungen.",
    x: 69,
    y: 85
  }, {
    station: "Spark ist komplementär zu Hadoop und erlaubt \ndas Fassen und Analysieren von Echtzeit-Daten \n(z.B. aus smarten Geräten). Z.B. von databricks.",
    x: 50,
    y: 88
  }, {
    station: "Hadoop ist seit 2012 der Standard für \nBig Data Analysen. Es ist ein Ökosystem aus Anwendungen, die das \ndezentrale Speichern und Bearbeiten von großen Daten erlaubt. \n Z.B. von Cloudera, HortonWorks.",
    x: 32,
    y: 78
  }, {
    station: "Data-Science Tools speisen sich u.a. aus den großen Datenmengen.",
    x: 35,
    y: 66
  },{
    station: "Datenbanken, Data Lakes und \nWarehouses speisen die Big Data Analysen.",
    x: 50,
    y: 50
  }, {
    station: "Auf Basis der Ablageorte der Daten kann nun allerhand damit gemacht werden.",
    x: 42,
    y: 24
  }]
);

createLine(
  "Data Science",
  am4core.color("#f49432"),
  [ {
    station: "Data-Science Tools speisen sich u.a. aus den großen Datenmengen.",
    x: 35,
    y: 64
  }, {
    station: "Spezielle Tools, oft für kleinere Datenanalysen. Z.B. Python, RapidMinder oder Knime.",
    x: 14,
    y: 38
  },{
    station: "Extract, Transform, Load, z.B. mit Talend oder Amazon Glue. \nDaten werden in ein Schema gebracht, \nso dass sie im Data Warehouse oder mit Data-Science Tools \nfür Analysen genutzt werden können.",
    x: 38,
    y: 50
  },{
    station: "Auf Basis der Ablageorte der Daten kann nun allerhand damit gemacht werden.",
    x: 43,
    y: 24
  }, ]
);


// Mong Kok
// createConnector(
//   [{
//    x: 52,
//    y: 53
//  }, {
//    x: 51,
//    y: 52
//  }]
// );


chart.legend = new am4charts.Legend();
chart.legend.position = "top";

/**
 * The map for background
 */

var bg = chart.plotContainer.createChild(am4core.Image);
bg.width = am4core.percent(100);
bg.height = am4core.percent(100);
bg.href = src="Map.png";
