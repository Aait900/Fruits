x = 0;
y = 0;
draw_fruit = "";

var screenWidth = 0;
var screenHeight= 0;
var apple = "";
var num = 0;
var speakData = "";

function preload()
{
    apple=loadImage("Apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {

console.log(event);

var content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "the speech has been recognized as: "+ content;
  num = Number(content);
  if(Number.isInteger(num))
  {
      document.getElementById("status").innerHTML = "Started drawing apple ";
      draw_fruit = "set";
  }
  else
    {
        document.getElementById("status").innerHTML = "The speech has not recognized a number  ";
    }
}

function setup() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    canvas = createCanvas(screenWidth, screenHeight-150);
}

function draw() {
    if(draw_fruit == "set")
    {
        for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400 );
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + "Apples drawn";
    speak();
    draw_fruit = "";
    } 
    
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

