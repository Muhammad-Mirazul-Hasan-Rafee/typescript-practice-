// abstraction == get idea but clear implementation will be seen later
//  two way - interface , abstract class




// using interface

// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// };

// // implementation
// class MusicPlayer implements MediaPlayer {
//     play() {
//         console.log('Playing music');
//     };
//     pause() {
//         console.log('Music paused!');

//     };
//     stop() {
//         console.log('Music stopped!');
//     };
// };


// const RafeePlayer = new MusicPlayer();
// RafeePlayer.play();



// using abstract class   -- leader class

// idea
abstract class MediaPlayer{
  abstract  play():void;
   abstract pause():void;
   abstract stop():void;
};

// implementation
class RafeePlayer extends MediaPlayer{
    play(){
        console.log('Playing music!');
    };
    pause(){
        console.log('Music Paused!');
    };
    stop(){
        console.log('Music stopped!')
    };
};

const myPlayer = new RafeePlayer();
myPlayer.play();
myPlayer.pause()
myPlayer.stop();