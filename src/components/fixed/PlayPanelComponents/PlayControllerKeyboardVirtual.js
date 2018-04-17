var api = require("./PlayApi.js");

export function getSound(instr, key) {
    // temporary
    key = "01";
    
    if (instr.type === "guitar")
        console.log();
    if (instr.type === "bass")
        console.log();
    if (instr.type === "piano")
        console.log();
    if (instr.type === "drumkit")
        console.log();
    
    let path = "/static/sounds/acoustic_guitar/" + instr + "/" + key + ".wav";
    console.log(path);
    let sound = api.getSound(path);
    return sound;
}