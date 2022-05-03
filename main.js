satus = ""
input_text = "";

function setup(){
    canvas = createCanvas(400,300)
     canvas.position(480,280)
     Video = createCapture(VIDEO)
     Video.size(300,290);
     Video.hide()

}
function start(){
    loadcoossd = ml5.objectDetector("cocossd",modelloaded)
    document.getElementById("staus").innerHTML="Status : Detecting object"
  input_text = document.getElementById("name").value
}
function modelloaded()
{
    console.log("model loaded!")
  Status = true
}



function draw(){
    image(Video,0,0,500,400)
    if(satus!= ""){
        loadcoossd.detect(Video,gotresult)
        for(vish = 0;vish<object.length;vish++){
document.getElementById("staus").innerHTML = "Staus:Object Detecting"
console.log(object.length)
fill("#ff0000");
percentag = floor(object[vish].confidence*100)
text(object[vish].label + " "+percent+"%",objects[vish].x+15,objects[vish].y+15)
noFill()
stroke("#ff0000")
rect(object[vish].x,object[vish].y,object[vish].width,object[vish].height)

if(objects[vish].label == input_text){
  Video.stop();
  object_detector.detect(gotresult);
  document.getElementById("object_found").innerHTML = input_text+"Found";
  var utterThis = new SpeechSynthesisUtterance(input_text+"Found");
  synth.speak(utterThis);
}
else{
  document.getElementById("object_found").innerHTML = input_text+"Not  Found";
}
}
        }

    }

    function gotresult(error,result){
      if(error){
      console.error(error);
      }
     else{
        console.log(result);
        object = result;
     }

  
  }