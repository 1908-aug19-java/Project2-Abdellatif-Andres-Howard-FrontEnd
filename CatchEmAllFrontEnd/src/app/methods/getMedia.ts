export class getMedia{

    playAudio(){
        let audio = new Audio();
        audio.src = "../../../assets/audio/alarm.wav";
        audio.load();
        audio.play();
       }
}
