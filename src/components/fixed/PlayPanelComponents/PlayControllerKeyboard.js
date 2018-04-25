var api = require("./PlayApi.js");

export function getSound(instr, key) {
    let name;
    
	if (!checkKey(instr, key))
		return;
    else
        name = checkKey(instr, key);
    // temporary
    key = "01";
    
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
    let sound = api.getSound(path);
    return sound;
}

function checkKey(i, k) {
	if (true) {
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
            case 49:
                return "6_00";
            case 50:
                return "6_01";
            case 65:
                return "6_02";
            case 90:
                return "6_03";
            case 81:
                return "6_04";
            case 83:
                return "6_05";
            case 87:
                return "6_06";
            case 88:
                return "6_07";
            case 51:
                return "5_00";
            case 52:
                return "5_01";
            case 69:
                return "5_02";
            case 82:
                return "5_03";
            case 68:
                return "5_04";
            case 70:
                return "5_05";
            case 67:
                return "5_06";
            case 86:
                return "5_07";
			default:
				return false;
		}
	}
	else if (i == "bass") {
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
	else if (i == "piano") {
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
	else if (i == "drumkit") {
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
				return false;
			default:
				return true;
		}
	}
	else {
		switch (k) {
			default:
				return false;
		}
	}
}