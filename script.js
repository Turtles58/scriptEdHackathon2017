let sounds = ["beeps", "digital", "electronic-beeps", "grenade", "lasers-2", "pixel-game-beeps", "robot-3", "betaball-lasers", "five-beeps", "fast-8bar-key-d1"];
let currentlyBinding = -1;
let soundBoard = {};
$("document").ready(() => {
    sounds.forEach((soundName) => {
        $("tbody").append(`<tr><td class = "sound" id = "b${soundName}">${soundName}</td> <td class = "binder" id = "k${soundName}">Click to bind</td> </tr>`);
        $("#audio").append(`<audio id = "${soundName}" src = "sounds/${soundName}.mp3"></audio>`);
    });
    $(".sound").click((e) => {
        console.log(e.currentTarget.innerText);
        const text = e.currentTarget.innerText;
        playSound(text);
        // const sound = document.getElementById(text);
        // console.dir(sound);
        // sound.currentTime = 0;
        // sound.play();
    });
    function playSound(soundName)
    {
        const sound = document.getElementById(soundName);
        console.log(sound);
        sound.currentTime = 0;
        sound.play();
    }
    $("body").keypress((key) => {
        console.log(key);
        if (currentlyBinding === -1) {
            if (key.keyCode in soundBoard) playSound(soundBoard[key.keyCode]);
            return;
        }
        if(key.keyCode in soundBoard) return;
        soundBoard[key.keyCode] = currentlyBinding;
        $(`#k${currentlyBinding}`).html(`Bound to ${key.key}`);
        currentlyBinding = -1;
        console.log(currentlyBinding);
    });
    $(".binder").click((k) => {
        if(currentlyBinding != -1) return;
        $(`#${k.currentTarget.id}`).html("[Binding]");
        currentlyBinding = k.currentTarget.id.replace('k', '');
    });
});
