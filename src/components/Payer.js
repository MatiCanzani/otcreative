import Plyr from 'plyr';

document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('#player', {
    autoplay: true,
    muted: true,
    loop: true,
  });
});
