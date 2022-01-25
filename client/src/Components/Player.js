import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import green from './green.mp3'

const Player = () => (
    <div>
        <div>"Another Green World"
            <br></br>
            Brian Eno</div>
        <br></br>
  <AudioPlayer
    autoPlay
    src={green}
    loop={true}
  />
  </div>
);

export default Player;