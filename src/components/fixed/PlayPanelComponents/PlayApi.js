import { Howl, Howler } from 'howler';

var bankSounds = [];

export function loadSounds(iName, iType) {
	bankSounds = [];
	
	let path = "/static/sounds/" + iType + "/" + iName;
	
	if (iType == "electric_guitar") {
		let max = 132;
		let note;
		
		for (let i = 0; i < max; i++) {
			if (i < 22) {
				if (i > 9)
					note = "6_" + i;
				else
					note = "6_0" + i;
			}
			else if (i < 22*2) {
				if (i - 22 > 9)
					note = "5_" + (i - 22);
				else
					note = "5_0" + (i - 22);
			}
			else if (i < 22*3) {
				if (i - 22*2 > 9)
					note = "4_" + (i - 22*2);
				else
					note = "4_0" + (i - 22*2);
			}
			else if (i < 22*4) {
				if (i - 22*3 > 9)
					note = "3_" + (i - 22*3);
				else
					note = "3_0" + (i - 22*3);
			}
			else if (i < 22*5) {
				if (i - 22*4 > 9)
					note = "2_" + (i - 22*4);
				else
					note = "2_0" + (i - 22*4);
			}
			else {
				if (i - 22*5 > 9)
					note = "1_" + (i - 22*5);
				else
					note = "1_0" + (i - 22*5);
			}
			
			const sound = new Howl ({
				src: [path + "/" + note + ".wav"],
				preload: true
			});
			bankSounds.push(sound);
		}
	}
	else if (iType == "drumkit") {
		let max = 5;
		let note;
		
		for (let i = 0; i < max; i++) {
			switch (i){
				case 0:
					note = "kick";
					break;
				case 1:
					note = "snare";
					break;
				case 2:
					note = "crash";
					break;
				case 3:
					note = "ride";
					break;
				case 4:
					note = "chh";
					break;
				default:
					note = "snare";
			}
			
			const sound = new Howl ({
				src: [path + "/" + note + ".wav"],
				preload: true
			});
			bankSounds.push(sound);
		}
	}
};

export function getSound(note) {
//	console.log("Sound no." + note);
    bankSounds[note].play();
}