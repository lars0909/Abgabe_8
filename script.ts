var text: string;
var audio: string [] = [('./audio/snare.mp3'), ("./audio/hihat.mp3"), ("/audio/kick.mp3"), ('./audio/A.mp3'), ('./audio/C.mp3'), ('./audio/F.mp3'), ('./audio/G.mp3'), ('./audio/laugh-1.mp3'), ('./audio/laugh-2.mp3')]; 
var count: number = 0;
let intervalid: number;

document.querySelector("#one").addEventListener(`click`, function(){
    playbuttonpart1(audio[0]);
    console.log("pad1");
});
document.querySelector("#two").addEventListener(`click`, function(){
    playbuttonpart1(audio[1]);
    console.log("pad2");
});
document.querySelector("#three").addEventListener(`click`, function(){
    playbuttonpart1(audio[2]);
    console.log("pad3");
    
});
document.querySelector("#four").addEventListener(`click`, function(){
    playbuttonpart1(audio[3]);
    console.log("pad4");
    
});
document.querySelector("#five").addEventListener(`click`, function(){
    playbuttonpart1(audio[4]);
    console.log("pad5");
    
});
document.querySelector("#six").addEventListener(`click`, function(){
    playbuttonpart1(audio[5]);
    console.log("pad6");
    
});
document.querySelector("#seven").addEventListener(`click`, function(){
    playbuttonpart1(audio[6]);
    console.log("pad7");
    
});
document.querySelector("#eight").addEventListener(`click`, function(){
    playbuttonpart1(audio[7]);
    console.log("pad8");
    
});
document.querySelector("#nine").addEventListener(`click`, function(){
    playbuttonpart1(audio[8]);
    console.log("pad9");
    
});

//teil B
function playbuttonpart1 (text) :void{
    var beat : HTMLAudioElement = new Audio(text);
    beat.play();
    console.log("test pb1");
    
}
function playbuttonpart2() : void{
    intervalid = setInterval( function(){
    playbuttonpart1(audio[count]);
    count +=1;
    console.log(count);
    if(count > 4){
        count = 0;
        console.log(count);
    }
    },500);
}
//button schwitches appearence
const button = document.getElementById("button")
function switchAppearance(){
    if (button.classList.contains("fa-play")) {
        button.classList.remove("fa-play");
        button.classList.add("fa-stop");
        playbuttonpart2();
      }
      else {
        button.classList.remove("fa-stop");
        button.classList.add("fa-play");
        clearInterval(intervalid);
      }    
}
document.querySelector("#pb").addEventListener(`click`, function(){
    switchAppearance();
})