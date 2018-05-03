var api = require("./PlayApi.js");

export function getSound(instr, key, isShift) {
    let note;
    
    switch (parseInt(key)) {
		// 6_00
		case 1:
            note = 0;
            break;
        case 15:
            note = 1;
            break;
        case 29:
            note = 2;
            break;
        case 42:
            note = 3;
            break;
        case 2:
            note = 4;
            break;
        case 16:
            note = 5;
            break;
        case 30:
            note = 6;
            break;
        case 43:
            note = 7;
            break;
		// 5_00
        case 3:
            note = 0 +22;
            break;
        case 17:
            note = 1 +22;
            break;
        case 31:
            note = 2 +22;
            break;
        case 44:
            note = 3 +22;
            break;
        case 4:
            note = 4 +22;
            break;
        case 18:
            note = 5 +22;
            break;
        case 32:
            note = 6 +22;
            break;
        case 45:
            note = 7 +22;
            break;
		// 4_00
        case 5:
            note = 0 +22*2;
            break;
        case 19:
            note = 1 +22*2;
            break;
        case 33:
            note = 2 +22*2;
            break;
        case 46:
            note = 3 +22*2;
            break;
        case 6:
            note = 4 +22*2;
            break;
        case 20:
            note = 5 +22*2;
            break;
        case 34:
            note = 6 +22*2;
            break;
        case 47:
            note = 7 +22*2;
            break;
		// 3_00
        case 7:
            note = 0 +22*3;
            break;
        case 21:
            note = 1 +22*3;
            break;
        case 35:
            note = 2 +22*3;
            break;
        case 48:
            note = 3 +22*3;
            break;
        case 8:
            note = 4 +22*3;
            break;
        case 22:
            note = 5 +22*3;
            break;
        case 36:
            note = 6 +22*3;
            break;
        case 49:
            note = 7 +22*3;
            break;
		// 2_00
        case 9:
            note = 0 +22*4;
            break;
        case 23:
            note = 1 +22*4;
            break;
        case 37:
            note = 2 +22*4;
            break;
        case 50:
            note = 3 +22*4;
            break;
        case 10:
            note = 4 +22*4;
            break;
        case 24:
            note = 5 +22*4;
            break;
        case 38:
            note = 6 +22*4;
            break;
        case 51:
            note = 7 +22*4;
            break;
		// 1_00
        case 11:
            note = 0 +22*5;
            break;
        case 25:
            note = 1 +22*5;
            break;
        case 39:
            note = 2 +22*5;
            break;
        case 12:
            note = 3 +22*5;
            break;
        case 26:
            note = 4 +22*5;
            break;
        case 27:
            note = 5 +22*5;
            break;
        default:
            break;
    }
    
    if (isShift)
        note += 8;
//    if (instr.type === "guitar")
//        console.log();
//    if (instr.type === "bass")
//        console.log();
//    if (instr.type === "piano")
//        console.log();
//    if (instr.type === "drumkit")
//        console.log();
    
	api.getSound(note);;
}