nosex = 0 
nosey = 0 
leftwrist_x = 0
rightwrist_x = 0
difference = 0 
function setup() {
    canvas = createCanvas(680, 500)
    canvas.position(1100, 200)
    video = createCapture(VIDEO)
    video.position(50, 220)
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotposes)
}

function modelloaded() {
    console.log("poseNet is loaded")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        leftwrist_x =  results[0].pose.leftWrist.x
        rightwrist_x =  results[0].pose.rightWrist.x
        difference = floor(leftwrist_x - rightwrist_x)
    }
}
function draw() {
    background("gray")
    fill("red")
    square(nosex,nosey,difference)
    document.getElementById("sqauresides").innerHTML="length of the square is"+ difference
}
