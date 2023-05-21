
audio_1 = ""
audio_2 = ''
left_wrist_X= 0
right_wrist_X=0
left_wrist_Y= 0
right_wrist_Y=0


function preload(){
    audio_1 = loadSound("DAKU.mp3")
    audio_2 = loadSound('KING.mp3')

}

function play_song(){

    audio_1.play()
    audio_1.setVolume(0.5)
    audio_1.rate(1)

}


function setup(){
canvas = createCanvas(600,500);
canvas.center()
webcam = createCapture(VIDEO)
webcam.hide()
poseNet = ml5.poseNet(webcam,modelLoaded)
poseNet.on('pose',gotResults)

}
function gotResults(results){

    if(results.length>0){
        console.log(results);
        left_wrist_X=results[0].pose.leftWrist.x
        right_wrist_X=results[0].pose.rightWrist.x
        left_wrist_Y=results[0].pose.leftWrist.y
        right_wrist_Y=results[0].pose.rightWrist.y
    }
    
    }
    function modelLoaded(){
        console.log('modelLoaded')
    }
    


function draw(){
 image(webcam,0,0,600,500)
 //image(variable name,x,y,width,height)
}


