const smallVideos = document.querySelectorAll('.video-small');
const mainIframe = document.getElementById('main-iframe');
const mainTitle = document.getElementById('main-title');
const mainMeta = document.getElementById('main-meta');

smallVideos.forEach(video => {
  const iframe = video.querySelector('iframe');
  const originalSrc = iframe.src.split('?')[0];
  const title = video.dataset.title;
  const meta = video.dataset.meta;

  // Click: usar el src real del iframe
  video.onclick = () => {
    mainIframe.src = originalSrc; // usa el video que realmente está embebido
    mainTitle.textContent = title;
    mainMeta.textContent = meta || '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hover: previsualización
  video.onmouseover = () => {
    iframe.src = `${originalSrc}?autoplay=1&mute=1`;
  };

  video.onmouseout = () => {
    iframe.src = `${originalSrc}?mute=1`;
  };
});
