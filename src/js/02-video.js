import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const currentTime = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
  let time = Number(localStorage.getItem('videoplayer-current-time'));
  console.log(time);
};

player.on('timeupdate', currentTime);

player
  .setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

// player.addEventListener(
//   'timeupdate',
//   _.throttle(() => {
//     console.log('videoplayer-current-time');
//   }, 1000)
// );
