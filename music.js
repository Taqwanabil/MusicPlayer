var song =document.getElementById("sound");
var first=document.getElementById("t1");
var second=document.getElementById("t2");
var third=document.getElementById("t3");
var fourth=document.getElementById("t4");
var selectedSong;
first.addEventListener("click", playSelected1);
function playSelected1(){
song.src ="t1.mp3";
song.play();  
}
second.addEventListener("click", playSelected2);
function playSelected2(){
song.src ="t2.mp3";
song.play(); 
}
third.addEventListener("click", playSelected3);
function playSelected3(){
song.src ="t3.mp3";
song.play(); 
}
fourth.addEventListener("click", playSelected4);
function playSelected4(){
song.src ="t4.mp3";
song.play();  
}
var songArr=[first,second,third,fourth];
var arrIndex=0;

var repeat=document.getElementById("repeat");
repeat.addEventListener("click", playRepeat);
function playRepeat(){
    song.addEventListener("ended",switchTrack);
    function switchTrack(){
    if(arrIndex == (songArr.length -1)){
        arrIndex =0;
    }
    else{
        arrIndex++;
    }
    console.log(songArr[arrIndex].id)  
    song.src = songArr[arrIndex].id+ ".mp3";
    song.play();
    }
        
}

var shuffle=document.getElementById("shuffle");
shuffle.addEventListener("click", playShuffle);
function playShuffle(){
    song.addEventListener("ended",RandomTracks);
    function RandomTracks(){
    for(var i=0;i<songArr.length;i++)
    {
        do{
        var randomSong=Math.floor(Math.random()* (songArr.length));
        }while(existingTrack());
    }
        //to get a unique no every time 
        function existingTrack() {
          for (var i = 0; i < songArr.length; i++) {
            if (songArr[i] === randomSong) {
                  return true;
                }
                 return false;
            }
         }
    console.log(randomSong);
    song.src = songArr[randomSong].id + ".mp3";
    song.play();
    }

}
