nose_x=0;
nose_y=0;
function preload() {
clown_nose= loadImage("data:image/jpeg;base64,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");

}
function setup() {
    canvas=createCanvas(650, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(650,400);
    video.hide();
PoseNet=ml5.poseNet(video, modelLoaded);
PoseNet.on('pose',GotPoses);
}
function modelLoaded() {
    console.log("Model has been loaded");

}
function GotPoses(results){
    if(results.length>0) {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    }
}
function draw() {
    image(video,0,100,650,400);
    image(clown_nose,nose_x,nose_y,30,15,);
}