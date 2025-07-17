
  const video = document.getElementById('myVideo');
  const playBtn = document.getElementById('playBtn');

  playBtn.onclick = () => {
    video.play();
    playBtn.style.display = 'none';
  };

  video.onclick = () => {
    video.pause();
    playBtn.style.display = 'block';
  };

  video.onended = () => {
    playBtn.style.display = 'block';
  };

