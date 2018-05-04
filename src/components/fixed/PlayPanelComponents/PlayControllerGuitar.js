var api = require("./PlayApi.js");

export function getSound(instr, key, isShift) {
    let note = key;
    
    api.getSound(note);
}