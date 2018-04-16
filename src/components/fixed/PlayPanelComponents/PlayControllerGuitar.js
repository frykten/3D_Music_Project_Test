export function getSound(number) {
    let sound = new Audio("/static/sounds/acoustic_guitar/pure_mini_sp/80_Bb_DblStopsGuitar_06_526.wav");
    return sound;
}

export function playSound(number) {
    var snd = new Audio("/static/sounds/acoustic_guitar/pure_mini_sp/80_Bb_DblStopsGuitar_06_526.wav");
    snd.play();
}

export function pushBtn(btn) {
    btn.classList.add("test");
}