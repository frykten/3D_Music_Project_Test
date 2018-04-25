var api = require("./PlayApi.js");

export function getSound(instr, key) {
    let name;
    
    switch (parseInt(key)) {
        case 1:
            name = "6_00";
            break;
        case 2:
            name = "6_01";
            break;
        case 15:
            name = "6_02";
            break;
        case 16:
            name = "6_03";
            break;
        case 29:
            name = "6_04";
            break;
        case 30:
            name = "6_05";
            break;
        case 42:
            name = "6_06";
            break;
        case 43:
            name = "6_07";
            break;
        case 3:
            name = "5_00";
            break;
        case 4:
            name = "5_01";
            break;
        case 17:
            name = "5_02";
            break;
        case 18:
            name = "5_03";
            break;
        case 31:
            name = "5_04";
            break;
        case 32:
            name = "5_05";
            break;
        case 44:
            name = "5_06";
            break;
        case 45:
            name = "5_07";
            break;
        case 5:
            name = "4_00";
            break;
        case 6:
            name = "4_01";
            break;
        case 19:
            name = "4_02";
            break;
        case 20:
            name = "4_03";
            break;
        case 33:
            name = "4_04";
            break;
        case 34:
            name = "4_05";
            break;
        case 46:
            name = "4_06";
            break;
        case 47:
            name = "4_07";
            break;
        case 7:
            name = "3_00";
            break;
        case 8:
            name = "3_01";
            break;
        case 21:
            name = "3_02";
            break;
        case 22:
            name = "3_03";
            break;
        case 35:
            name = "3_04";
            break;
        case 36:
            name = "3_05";
            break;
        case 48:
            name = "3_06";
            break;
        case 49:
            name = "3_07";
            break;
        case 9:
            name = "2_00";
            break;
        case 10:
            name = "2_01";
            break;
        case 23:
            name = "2_02";
            break;
        case 24:
            name = "2_03";
            break;
        case 37:
            name = "2_04";
            break;
        case 38:
            name = "2_05";
            break;
        case 50:
            name = "2_06";
            break;
        case 51:
            name = "2_07";
            break;
        case 11:
            name = "1_00";
            break;
        case 12:
            name = "1_01";
            break;
        case 25:
            name = "1_02";
            break;
        case 26:
            name = "1_03";
            break;
        case 27:
            name = "1_04";
            break;
        case 39:
            name = "1_05";
            break;
        default:
            break;
    }
    
//    if (instr.type === "guitar")
//        console.log();
//    if (instr.type === "bass")
//        console.log();
//    if (instr.type === "piano")
//        console.log();
//    if (instr.type === "drumkit")
//        console.log();
    
    let path = "/static/sounds/acoustic_guitar/" + instr + "/" + name + ".wav";
//    console.log(path);
//    console.log("Key: " + name);
    let sound = api.getSound(path);
    return sound;
}