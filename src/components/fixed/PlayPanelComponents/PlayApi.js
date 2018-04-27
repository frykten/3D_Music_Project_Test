import { Howl, Howler } from 'howler';

var bankSounds= [];

export function loadSounds(path) {
    for (let i = 0; i < 2; i++) {
        const sound = new Howl ({
            src: [path + "/6_01.wav"],
            preload: true
        });
        bankSounds.push(sound);
    }
};

export function getSound(path) {
    bankSounds[0].play();
}