var text;
var audio = [('./audio/snare.mp3'), ("./audio/hihat.mp3"), ("/audio/kick.mp3"), ('./audio/A.mp3'), ('./audio/C.mp3'), ('./audio/F.mp3'), ('./audio/G.mp3'), ('./audio/laugh-1.mp3'), ('./audio/laugh-2.mp3')];
var count = 0;
let intervalid;
let intervalId2;
document.querySelector("#one").addEventListener(`click`, function () {
    playbuttonpart1(audio[0]);
    console.log("pad1");
});
document.querySelector("#two").addEventListener(`click`, function () {
    playbuttonpart1(audio[1]);
    console.log("pad2");
});
document.querySelector("#three").addEventListener(`click`, function () {
    playbuttonpart1(audio[2]);
    console.log("pad3");
});
document.querySelector("#four").addEventListener(`click`, function () {
    playbuttonpart1(audio[3]);
    console.log("pad4");
});
document.querySelector("#five").addEventListener(`click`, function () {
    playbuttonpart1(audio[4]);
    console.log("pad5");
});
document.querySelector("#six").addEventListener(`click`, function () {
    playbuttonpart1(audio[5]);
    console.log("pad6");
});
document.querySelector("#seven").addEventListener(`click`, function () {
    playbuttonpart1(audio[6]);
    console.log("pad7");
});
document.querySelector("#eight").addEventListener(`click`, function () {
    playbuttonpart1(audio[7]);
    console.log("pad8");
});
document.querySelector("#nine").addEventListener(`click`, function () {
    playbuttonpart1(audio[8]);
    console.log("pad9");
});
//teil B
function playbuttonpart1(text) {
    var beat = new Audio(text);
    beat.play();
    console.log("test pb1");
}
function playbuttonpart2() {
    intervalid = setInterval(function () {
        playbuttonpart1(audio[count]);
        count += 1;
        console.log(count);
        if (count > 4) {
            count = 0;
            console.log(count);
        }
    }, 500);
}
const button = document.getElementById("button");
function switchAppearance() {
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
document.querySelector("#pb").addEventListener(`click`, function () {
    switchAppearance();
});
function remix() {
    intervalId2 = setInterval(function () {
        const rdm = Math.floor(Math.random() * audio.length);
        console.log(rdm);
        playbuttonpart1(audio[rdm]);
        console.log("test-rmx-fnc");
    }, 500);
}
const remixer = document.getElementById("remix");
function switchAppearance2() {
    if (remixer.classList.contains("on")) {
        remixer.classList.remove("on");
        remixer.classList.add("off");
        remix();
        console.log("hilfe");
    }
    else {
        remixer.classList.remove("off");
        remixer.classList.add("on");
        clearInterval(intervalId2);
    }
}
document.querySelector("#remix").addEventListener(`click`, function () {
    console.log("test-rmx-btn");
    switchAppearance2();
});
//# sourceMappingURL=script.js.map