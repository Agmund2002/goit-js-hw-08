import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const storageKey  = "videoplayer-current-time";

const player = new Player(iframe);

player.on('timeupdate', throttle(handlerPlayer, 1000));

function handlerPlayer(evt) {
    localStorage.setItem(storageKey, JSON.stringify(Math.floor(evt.seconds)));
}

player.setCurrentTime(JSON.parse(localStorage.getItem(storageKey)) ?? 0);