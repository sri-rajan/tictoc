let box = document.getElementsByClassName('box');

// to know the player turn
let j=0;
let val={1:'',2:'',3:'',
            4:'',5:'',6:'',
            7:'',8:'',9:'',
}
//to know if the game finished
let finish='';

//sounds
const sound = new Audio("./sound/swish.m4a");
const soundwin = new Audio("./sound/cash.mp3");

// for checking button click
for(let i=0;i<box.length;i++){
    box[i].addEventListener('click',play);
}

//image showing (x and o)
function play(){
    // for showing images
    if (val[this.id]=='' && finish==''){
        // playing sound
        sound.play();
        if(j%2==0){
            let img=document.createElement('img');
            img.src = "./images/x.png";
            let place = document.getElementById(this.id);
            place.appendChild(img);
            val[this.id]="X";
            checkvalue(this.id)
        }else{  
            let img=document.createElement('img');
            img.src = "./images/o.jfif";
            let place = document.getElementById(this.id);
            place.appendChild(img);
            val[this.id]='O'
            checkvalue(this.id)
        }
       // to change x to o
       j +=1;
    }
}

//checking the winner(game logic)
function checkvalue(player){
    if(j>3){
        //checking for horizontal and vertical
        if((val[1]==val[2] && val[2]==val[3] && val[1]!='')|| (val[4]==val[5] && val[5]==val[6] && val[4]!='' ) ||(val[7]==val[8] && val[8]==val[9] && val[7]!='')||
         (val[1]==val[4] && val[4]==val[7] && val[1]!='')||(val[2]==val[5] && val[5]==val[8] && val[2]!='')|| (val[3]==val[6] && val[6]==val[9] && val[3]!='') ){
            var status = document.getElementById('status');
            status.style.color="green";
            status.innerHTML="Winner: "+val[player];
            finish="yes";
            soundwin.play()
        //checking for diganal
        }else if((val[1]==val[5] && val[5]==val[9] && val[1]!='')|| (val[3]==val[5] && val[5]==val[7] && val[3]!='' )){
            var status = document.getElementById('status');
            status.style.color="green";
            status.innerHTML="Winner: "+val[player];
            finish="yes";  
            soundwin.play()    
        }
    }
}


// for reset button
document.getElementById("but").addEventListener('click',reset);
function reset(){
    location.reload();
}


