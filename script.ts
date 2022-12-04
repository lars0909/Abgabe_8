var text: string;
var eins:HTMLAudioElement = new Audio('./audio/snare.mp3');
var zwei:HTMLAudioElement = new Audio('./audio/hihat.mp3');
var drei:HTMLAudioElement = new Audio('./audio/kick.mp3');
var vier:HTMLAudioElement = new Audio('./audio/A.mp3');
var fuenf:HTMLAudioElement = new Audio('./audio/C.mp3');
var sechs:HTMLAudioElement = new Audio('./audio/F.mp3');
var sieben:HTMLAudioElement = new Audio('./audio/G.mp3');
var acht:HTMLAudioElement = new Audio('./audio/laugh-1.mp3');
var neun:HTMLAudioElement = new Audio('./audio/laugh-2.mp3');

//var Teil B
var audio: string [] = [('./audio/snare.mp3'), "./audio/hihat.mp3", "/audio/kick.mp3", "./audio/hihat.mp3", "./audio/kick.mp3"]; 
var count: number = 0;

function test (text, eins) :void{
    console.log(text); 
    eins.play();
}
document.querySelector("#one").addEventListener(`click`, function(){
    test("1", eins);
});
document.querySelector("#two").addEventListener(`click`, function(){
    test("2", zwei);
});
document.querySelector("#three").addEventListener(`click`, function(){
    test("3", drei);
});


document.querySelector("#four").addEventListener(`click`, function(){
    test("4", vier);
});
document.querySelector("#five").addEventListener(`click`, function(){
    test("5", fuenf);
});
document.querySelector("#six").addEventListener(`click`, function(){
    test("6", sechs);
});


document.querySelector("#seven").addEventListener(`click`, function(){
    test("7", sieben);
});
document.querySelector("#eight").addEventListener(`click`, function(){
    test("8", acht);
});
document.querySelector("#nine").addEventListener(`click`, function(){
    test("9", neun);
});
//teil B
function playbuttonpart1 (text) :void{
    var beat : HTMLAudioElement = new Audio(text);
    beat.play();
}
function playbuttonpart2() : void{
    setInterval(function(){
    playbuttonpart1(audio[count]);
    count +=1;
    console.log(count);
    if(count > 4){
        count = 0;
        console.log("0");
        clearInterval;      //wie stoppe ich den intervall wieder?
    }
    },700);
}

document.querySelector("#pb").addEventListener(`click`, function(){
    playbuttonpart2();
})