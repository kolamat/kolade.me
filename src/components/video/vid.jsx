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
    // function playVideo(videoSrc) {
    //     var videoPlayer = document.getElementById('videoPlayer');
    //     // Set the selected video source
    //     videoPlayer.src = videoSrc;
    //     // Start playing the video
    //     videoPlayer.play();
    //   }
    // .video-container {
    //     width: 100%;
    //     max-width: 600px; /* Adjust as needed */
    //     margin: 0 auto;
    //   }

    //   .video-list {
    //     margin-top: 10px;
    //   }

    //   .video-list button {
    //     margin-right: 10px;
    //     cursor: pointer;
    //   }
  );
};

export default vid;
