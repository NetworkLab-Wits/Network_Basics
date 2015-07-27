//A wind direction vector
var wind;
// Circle position
var position;
// background transprency
var humidity;
// red value
var temp;

function setup() {
  createCanvas(720, 400);
  // Request the data from openweathermap
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Johannesburg&units=metric', gotWeather);
  // Circle starts in the middle
  position = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind = createVector();
}

function draw() {
  background(255,255,255,humidity);

  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();
  
  // Move in the wind's direction
  position.add(wind);
  
  noStroke();
  fill(0,0,temp);
  ellipse(position.x, position.y, 16, 16);
  noStroke();
  fill(0,0,temp+100);
  ellipse(position.x, position.y-10, 5, 5);
  ellipse(position.x+8, position.y-6, 5, 5);

  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;


}

function gotWeather(weather) {
  
  // Get the angle (convert to radians)
  var angle = radians(Number(weather.wind.deg));
  // Get the wind speed
  var windmag = Number(weather.wind.speed);

  humidity = Number(weather.main.humidity);

  temp = Number(weather.main.temp);
  
  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.main.temp) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>KMPH</small>");
  
  // Make a vector
  wind = p5.Vector.fromAngle(angle);
  console.log(weather);
}