var api = require("./PlayApi.js");

export function getSound(instr, key) {
    let path = "/static/sounds/acoustic_guitar/" + instr + "/" + key + ".wav";
    console.log("/static/sounds/acoustic_guitar/" + instr + "/" + key);
    let sound = api.getSound(path);
    return sound;
}
