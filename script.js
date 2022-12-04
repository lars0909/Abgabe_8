var text;
var eins = new Audio('./audio/snare.mp3');
var zwei = new Audio('./audio/hihat.mp3');
var drei = new Audio('./audio/kick.mp3');
var vier = new Audio('./audio/A.mp3');
var fuenf = new Audio('./audio/C.mp3');
var sechs = new Audio('./audio/F.mp3');
var sieben = new Audio('./audio/G.mp3');
var acht = new Audio('./audio/laugh-1.mp3');
var neun = new Audio('./audio/laugh-2.mp3');
//var Teil B
var audio = [('./audio/snare.mp3'), "./audio/hihat.mp3", "/audio/kick.mp3", "./audio/hihat.mp3", "./audio/kick.mp3"];
var count = 0;
function test(text, eins) {
    console.log(text);
    eins.play();
}
document.querySelector("#one").addEventListener(`click`, function () {
    test("1", eins);
});
document.querySelector("#two").addEventListener(`click`, function () {
    test("2", zwei);
});
document.querySelector("#three").addEventListener(`click`, function () {
    test("3", drei);
});
document.querySelector("#four").addEventListener(`click`, function () {
    test("4", vier);
});
document.querySelector("#five").addEventListener(`click`, function () {
    test("5", fuenf);
});
document.querySelector("#six").addEventListener(`click`, function () {
    test("6", sechs);
});
document.querySelector("#seven").addEventListener(`click`, function () {
    test("7", sieben);
});
document.querySelector("#eight").addEventListener(`click`, function () {
    test("8", acht);
});
document.querySelector("#nine").addEventListener(`click`, function () {
    test("9", neun);
});
//teil B
function playbuttonpart1(text) {
    var beat = new Audio(text);
    beat.play();
}
function playbuttonpart2() {
    setInterval(function () {
        playbuttonpart1(audio[count]);
        count += 1;
        console.log(count);
        if (count > 4) {
            count = 0;
            console.log("0");
            clearInterval; //wie stoppe ich den wieder?
        }
    }, 700);
}
document.querySelector("#pb").addEventListener(`click`, function () {
    playbuttonpart2();
});
//# sourceMappingURL=script.js.map