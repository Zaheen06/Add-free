// Function to load a new video
function loadVideo() {
  const urlInput = document.getElementById('videoUrl').value;
  const videoId = extractVideoId(urlInput);
  if (videoId) {
    const player = document.getElementById('youtubePlayer');
    player.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1&controls=1`;
  } else {
    alert('Please enter a valid YouTube URL.');
  }
}

// Function to extract video ID from YouTube URL
function extractVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})|youtu\.be\/([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] || match[2] : null;
}
