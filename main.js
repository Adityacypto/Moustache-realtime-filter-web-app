noseX = 0;
noseY = 0;
function preload(){

  moustache = loadImage("https://i.postimg.cc/G2GCSfYZ/m.png");
  

}


function setup(){

  canvas = createCanvas(550,550);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(550,550);

 video.hide();

 poseNet = ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}

function modelLoaded(){

  console.log("PoseNet Initialized");
}


function draw(){
  image(video,0,0,550,550);
  // circle(noseX,noseY,50);
  // stroke(255,0,0);
  // fill(255,0,0);
  image(moustache,noseX,noseY,100,50); 
  
  }

function take_Snapshot(){

    save("myFilterIMage.png");
    
}

function gotPoses(results){

  if(results.length > 0){

    console.log(results);
    noseX = results[0].pose.nose.x - 45;
    noseY = results[0].pose.nose.y - 3;
    console.log("nose x = "+ results[0].pose.nose.x)
    console.log("nose y = "+ results[0].pose.nose.y);
  }

}