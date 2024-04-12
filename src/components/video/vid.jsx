const vid = () => {
  return (
    <div class="video-container">
      <video id="videoPlayer" controls>
        Placeholder for video source
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="video-list">
        <button onclick="playVideo('video1.mp4')">Play Video 1</button>
        <button onclick="playVideo('video2.mp4')">Play Video 2</button>
        Add more buttons for additional videos
      </div>
    </div>
  );
};

export default vid;
