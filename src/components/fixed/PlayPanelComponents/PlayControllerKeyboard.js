var api = require("./PlayApi.js");

export function getSound(instr, evt) {
    let note;
    let key = evt.keyCode;
    let isShift = evt.shiftKey;
    
	if (checkKey(instr, key) === false)
		return;
    else
        note = checkKey(instr, key);
    
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
    
	api.getSound(note);
}

function checkKey(i, k) {
	let p = i.type.toLowerCase();
	
	if (p == "electric_guitar") {
		switch (k) {
			// Special cases
			case 222:
			case 8:
			case 9:
			case 20:
			case 13:
			case 16:
			case 17:
			case 92:
			case 18:
			case 226:
			case 144:
			case 107:
			case 96:
			case 110:
			// Number pad
			case 111:
			case 106:
			case 109:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
				return false;
			// 6_00
            case 49:
                return 0;
            case 65:
                return 1;
            case 81:
                return 2;
            case 87:
                return 3;
            case 50:
                return 4;
            case 90:
                return 5;
            case 83:
                return 6;
            case 88:
                return 7;
			// 5_00
            case 51:
                return 0 +22;
            case 69:
                return 1 +22;
            case 68:
                return 2 +22;
            case 67:
                return 3 +22;
            case 52:
                return 4 +22;
            case 82:
                return 5 +22;
            case 70:
                return 6 +22;
            case 86:
                return 7 +22;
			// 4_00
			case 53:
                return 0 +22*2;
            case 84:
                return 1 +22*2;
            case 71:
                return 2 +22*2;
            case 66:
                return 3 +22*2;
            case 54:
                return 4 +22*2;
            case 89:
                return 5 +22*2;
            case 72:
                return 6 +22*2;
            case 78:
                return 7 +22*2;
			// 3_00
			case 55:
                return 0 +22*3;
            case 85:
                return 1 +22*3;
            case 74:
                return 2 +22*3;
            case 188:
                return 3 +22*3;
            case 56:
                return 4 +22*3;
            case 73:
                return 5 +22*3;
            case 75:
                return 6 +22*3;
            case 190:
                return 7 +22*3;
			// 2_00
			case 57:
                return 0 +22*4;
            case 79:
                return 1 +22*4;
            case 76:
                return 2 +22*4;
            case 191:
                return 3 +22*4;
            case 48:
                return 4 +22*4;
            case 80:
                return 5 +22*4;
            case 77:
                return 6 +22*4;
            case 223:
                return 7 +22*4;
			// 1_00
			case 219:
                return 0 +22*5;
            case 221:
                return 1 +22*5;
			case 192:
                return 2 +22*5;
            case 186:
                return 3 +22*5;
            case 187:
                return 4 +22*5;
            case 220:
                return 5 +22*5;
			default:
				return false;
		}
	}
	else if (p == "bass") {
		switch (k) {
			// Special cases
			case 222:
			case 8:
			case 9:
			case 20:
			case 13:
			case 16:
			case 17:
			case 92:
			case 18:
			case 226:
			case 144:
			case 107:
			case 96:
			case 110:
			// Letters out
			case 219:
			case 187:
			case 221:
			case 186:
			case 220:
			case 192:
				return false;
			default:
				return true;
		}
	}
	else if (p == "piano") {
		switch (k) {
			// Special cases
			case 222:
			case 8:
			case 9:
			case 20:
			case 13:
			case 16:
			case 17:
			case 92:
			case 18:
			case 226:
			case 144:
			case 107:
			case 96:
			case 110:
			// Letters out
			case 52:
			case 55:
			case 219:
			case 187:
			case 221:
			case 186:
			case 220:
			case 81:
			case 70:
			case 75:
			case 192:
				// Number pad
			case 111:
			case 106:
			case 109:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
				return false;
			default:
				return true;
		}
	}
	else if (p == "drumkit") {
		switch (k) {
			// Snare
			case 67:
				return 1;
			// Kick
			case 32:
				return 0;
			// Hi-hats
			case 88:
				return 4;
			case 87:
				return 4;
			// Toms
			case 70:
				return 1;
			case 71:
				return 1;
			case 66:
				return 1;
			// Crashes
			case 83:
				return 2;
			case 74:
				return 2;
			// Rides
			case 82:
				return 3;
			case 89:
				return 3;
			// Special cases
			case 222:
			case 8:
			case 9:
			case 20:
			case 13:
			case 16:
			case 17:
			case 92:
			case 18:
			case 226:
			case 144:
			case 107:
			case 96:
			case 110:
				return false;
			default:
				return false;
		}
	}
	else {
		switch (k) {
			default:
				return false;
		}
	}
}