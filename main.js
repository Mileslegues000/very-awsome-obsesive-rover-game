canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;


rover_x=10;
rover_y=10;

bg_img_array=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars.jpg"];
var random=Math.floor(Math.random()*5); 

background_img=bg_img_array[random];
rover_img="rover.png";




function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;


    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_img;
}





function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}






function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_Keydown);

function my_Keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='37' || keyPressed=='65'){
left();
console.log("left");
    }
    if(keyPressed=='38' || keyPressed=='87'){
        up();
        console.log("up");
            }
            if(keyPressed=='39' || keyPressed=='68'){
                right();
                console.log("right");
                    }
                    if(keyPressed=='40' || keyPressed=='83'){
                        down();
                        console.log("down");
                            }
}


function up(){
    if (rover_y>0){
        rover_y -=10;
        console.log("when up is pressed");
        console.log("X= "+rover_x+"| Y= "+rover_y);
        uploadBackground();
        uploadRover();
    }

    
}
function down(){
    if (rover_y<500){
        rover_y +=10;
        console.log("when down is pressed");
        console.log("X= "+rover_x+"| Y= "+rover_y);
        uploadBackground();
        uploadRover();
    }

    
}
function left(){
    if (rover_x>0){
        rover_x -=10;
        console.log("when left is pressed");
        console.log("X= "+rover_x+"| Y= "+rover_y);
        uploadBackground();
        uploadRover();
    }

    
}
function right(){
    if (rover_x<700){
        rover_x +=10;
        console.log("when right is pressed");
        console.log("X= "+rover_x+"| Y= "+rover_y);
        uploadBackground();
        uploadRover();
    }

    
}