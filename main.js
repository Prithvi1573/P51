function setup()
{
    canvas= createCanvas(640,480);
    canvas.position(150,150);
    video= createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,230,150,220,200);
    fill(183,75,255);
    stroke(183, 75, 255);
    circle(50,100,80);

    fill(255,157,0);
    stroke(255,157,0);
rect(100, 200, 80, 55);

fill(38, 255, 132);
stroke(38, 255, 132);
circle(499,160,80);

fill(133, 210, 255);
stroke(133, 210, 255);
circle(180,350,80);

fill(255, 0, 0);
stroke(255, 0, 0);
rect(450, 360, 80, 55);

fill(25, 255, 45);
stroke(25, 255, 45);
rect(350, 10, 80, 55);

fill(255, 25, 201);
stroke(255, 25, 201);
rect(10, 400, 80, 55);

fill(245, 252, 33);
stroke(245, 252, 33);
circle(590,290,80);
}