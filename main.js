scoreleftwrist=0;
song_Peter_pan="";
song1="";
song2peterpan="";
leftwristx="";
leftwristy="";
rightwristy="";
rightwristx="";
function preload(){
    song1=loadSound("music.mp3");
    song2peterpan=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);

    fill("#2d9c8d");
    stroke("#2d9c8d");

    song_Peter_pan=song2peterpan.isPlaying();
    console.log(song_Peter_pan);

    if(scoreleftwrist>0.2){
        circle(leftwristx,leftwristy,20);
        song1.stop();
        if(song_Peter_pan==false){
            song2peterpan.play();
        }

        else{
            document.getElementById("songs_id").innerHTML="Song Name: Peter Pan song";
        }
    }
}
function modeLoaded(){
    console.log("PoseNet Is intialized");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    scoreleftwrist=results[0].pose.keypoints[9];
    console.log(scoreleftwrist);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    console.log("leftwristx = "+leftwristx+",leftwristy = "+leftwristy);
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log("rightwristx = "+rightwristx+",rightwristy = "+rightwristy);

}
}

