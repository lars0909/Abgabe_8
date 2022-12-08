var text: string;
var audio: string [] = [('./audio/snare.mp3'), "./audio/hihat.mp3", "/audio/kick.mp3", './audio/A.mp3', './audio/C.mp3', './audio/F.mp3', './audio/G.mp3', './audio/laugh-1.mp3', './audio/laugh-2.mp3']; 
var count: number = 0;
let intervalid: number;

document.querySelector("#one").addEventListener(`click`, function(){
    playbuttonpart1(audio[0]);
});
document.querySelector("#two").addEventListener(`click`, function(){
    playbuttonpart1(audio[1]);
});
document.querySelector("#three").addEventListener(`click`, function(){
    playbuttonpart1(audio[2]);
});


document.querySelector("#four").addEventListener(`click`, function(){
    playbuttonpart1(audio[3]);
});
document.querySelector("#five").addEventListener(`click`, function(){
    playbuttonpart1(audio[4]);
});
document.querySelector("#six").addEventListener(`click`, function(){
    playbuttonpart1(audio[5]);
});


document.querySelector("#seven").addEventListener(`click`, function(){
    playbuttonpart1(6);
});
document.querySelector("#eight").addEventListener(`click`, function(){
    playbuttonpart1(7);
});
document.querySelector("#nine").addEventListener(`click`, function(){
    playbuttonpart1(8);
});
//teil B
function playbuttonpart1 (text) :void{
    var beat : HTMLAudioElement = new Audio(text);
    beat.play();
}
function playbuttonpart2() : void{
    intervalid = setInterval( function(){
    playbuttonpart1(audio[count]);
    count +=1;
    console.log(count);
    if(count > 4){
        count = 0;
        console.log("0");
    }
    },500);
}
document.querySelector("#pb").addEventListener(`click`, function(){
    playbuttonpart2();
})