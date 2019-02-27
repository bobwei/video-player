const fn = ({ ref, event = 'keydown' }) => {
  const $video = ref.current;
  const delta = 5;
  const listener = (e) => {
    if (e.key === 'ArrowLeft') {
      $video.currentTime -= delta;
    } else if (e.key === 'ArrowRight') {
      $video.currentTime += delta;
    } else if (e.key === ' ') {
      if ($video.paused) {
        $video.play();
      } else {
        $video.pause();
      }
    }
  };
  window.document.body.addEventListener(event, listener);
  return () => {
    window.document.body.removeEventListener(event, listener);
  };
};

export default fn;
