var data;
var states = {};

function preload() {
  data = loadJSON('UFO-Sightings-2015.json');
}

function setup() {
  createCanvas(1500, 1500);
  noStroke();
  noLoop();
}

function draw() {

  // incident/college names
  for (var i=0; i<Object.keys(data).length; i++) {

    // var college_name = data[i].college;
    // var date_opened = data[i].opened;
    // var date_closed = data[i].closed;
    // var status = data[i].status; // "active" or "resolved"
    // var sector = data[i].sector; // "public" or "private"
    // var state_abbrev = data[i].state_abbrev;
    // var state_name = data[i].state_name;

    var name = data[i].summary;
    //var house = data[i].hse;
    //var yrs = data[i].yrs;
    // var status = data[i].status; // "active" or "resolved"
    // var sector = data[i].sector; // "public" or "private"
    // var state_abbrev = data[i].state_abbrev;
    // var state_name = data[i].state_name;

    // if (status == 'active') {
    //   fill(255, 50, 0)
    // } else if (status == 'resolved') {
    //   fill(200, 100);
    // }
    //fill(random(255));
    text(name, 20, i);
    createElement('h1', name);


    // save data by state_abbrev for bar graph drawing after iterating through all
  //   if (states[state_abbrev]) {
  //     states[state_abbrev] = states[state_abbrev] + 1;
  //   } else {
  //     states[state_abbrev] = 1;
  //   }
  // }
  //
  //
  // // state bar graph
  // var x = 0;
  // for (var s in states) {
  //   var abbrev = s;
  //   var value = states[s];
  //
  //   fill('lightblue');
  //   rect(x, height, 30, -10*value);
  //   fill(0);
  //   text(abbrev, x, height);
  //   x += width/50;
 }
}

function keyTyped() {
  switch(key.toLowerCase()) {
    case 's': save('file-' + ~~random(100, 900)+ '.png'); break;

  }
}
