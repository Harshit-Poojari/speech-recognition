x = 0;
y = 0;
draw_cirlce = "";
draw_rectangle = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var  recognition = new SpeechRecognition();

function draw_shape() {
    document.getElementById("status").innerHTML = "system is listening please speak";
    recognition.start();
}

recognition.onResult = function(event) {
    console.log(event);
   var content = event.results[0][0].transcript;
   document.getElementById("status").innerHTML = "Speech has been Recognized as:"+content;
   if (content == "circle") {
       x = Math.floor(Math.random()*900);
       y = Math.floor(Math.random()*600);
       document.getElementById("status").innerHTML = "Started Drawing Circle ";
       draw_cirlce = "set";  
   }

   if (content == "rectangle") {
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML = "Started Drawing Rectangle ";
    draw_rectangle = "set";
}
}

function setup() {
    canvas = createCanvas(900,600);
}

function draw() {
    if(draw_cirlce == "set") {
      radius = Math.floor(Math.random()*100);
      circle(x,y,radius);
      document.getElementById("status").innerHTML = "Circle is Drawn";
      draw_cirlce = "";
    }

    if(draw_rectangle == "set") {
        rectangle(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is Drawn";
        draw_rectangle = "";
      }
}


