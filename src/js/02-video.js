import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(event) {
  localStorage.setItem(LOCAL_STORAGE_KEY, event.seconds);
}, 1000));

const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
if (currentTime) {
  player.setCurrentTime(currentTime);
}

