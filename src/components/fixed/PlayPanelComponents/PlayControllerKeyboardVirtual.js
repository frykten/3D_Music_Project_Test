export function getSound(instr, key) {
    let sound = new Audio("/static/sounds/acoustic_guitar/" + instr + "/80_Bb_DblStopsGuitar_06_526.wav");
    return sound;
}