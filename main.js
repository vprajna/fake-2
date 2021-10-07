img = "";
status = "";
var catx,caty,cath,catw,catp;
var catname = "";
var dogx,dogy,dogh,dogw,dogp;
var dogname = "";
object_arry=[];
function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded !");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results) {
    if(error){
console.log(error);
    }
    else{
    object_arry=results;
    console.log(object_arry);
    }
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("FF0000");
    console.log(object_arry);
    text(object_arry[1].label+" "+object_arry[1].confidence,object_arry[1].x+10,object_arry[1].y+10);
    noFill();
    stroke("FF0000");
    rect(object_arry[1].x,object_arry[1].y,object_arry[1].width,object_arry[1].height);

    fill("grey");
    text(catname+" "+catp,catx+10,caty+10);
    noFill();
    stroke("grey");
    rect(catx-80,caty,catw,cath);
}
