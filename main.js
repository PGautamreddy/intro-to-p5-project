function setup(){
    canvas = createCanvas (800,600);
    canvas.position(250,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,305,175,200,200);


      circle (50,70,70);
      circle (760,70,70);
      circle (760,570,70);
      circle (50,570,70);
    fill (0,255,255);

    rect (80,45,650,50);
    rect (735,90,50,450);
    rect (20,90,50,450);
    rect (80,550,650,50);
    fill (255,0,0)
}

function take_snapshot(){
    save("MyPic.png");
}

