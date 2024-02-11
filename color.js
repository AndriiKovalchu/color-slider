var elem = document.querySelector('.r');
var elem1 = document.querySelector('.g');
var elem2 = document.querySelector('.b');
var color = document.querySelector('.color');
var r = 46,
    g = 204,
    b = 113;
  
var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
  r = newValue;
  colorchange();
}

var rangeValue1 = function(){
  var newValue1 = elem1.value;
  var target1 = document.querySelector('.value1');
  target1.innerHTML = newValue1;
  g = newValue1;
  colorchange();
}

var rangeValue2 = function(){
  var newValue2 = elem2.value;
  var target2 = document.querySelector('.value2');
  target2.innerHTML = newValue2;
  b = newValue2;
  colorchange();
}

var colorchange = function(){
  document.getElementById("col").style.backgroundColor = "rgb("+r+","+g+","+b+")"
}

elem.addEventListener("input", rangeValue);
elem1.addEventListener("input", rangeValue1);
elem2.addEventListener("input", rangeValue2);

document.getElementById("shadowR").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #B03A2E 0%, #B03A2E ' + value + '%, #283747 ' + value + '%, #283747 100%)'
};

document.getElementById("shadowG").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #229954 0%, #229954 ' + value + '%, #283747 ' + value + '%, #283747 100%)'
};

document.getElementById("shadowB").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #2874A6 0%, #2874A6 ' + value + '%, #283747 ' + value + '%, #283747 100%)'
};