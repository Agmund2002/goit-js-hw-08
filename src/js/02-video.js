import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(handlerPlayer, 1000));

function handlerPlayer(evt) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(Math.floor(evt.seconds)));
}

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? 0);