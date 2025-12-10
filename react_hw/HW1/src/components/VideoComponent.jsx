import videoFile from '../assets/question.MP4'

function VideoComponent() {
  return (
    // <iframe
    //   width="560"
    //   height="315"
    //   src="https://www.youtube.com/watch?v=q6nnacxDOUQ"
    //   frameborder="0"
    //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //   allowfullscreen
    // ></iframe>

    <video
        width="640"
        height="360"
        controls
        // poster="/thumbnail.jpg" 
      >
        <source src={videoFile} type="video/mp4" />
        Ваш браузер не поддерживает тег <code>video</code>.
      </video>
  );
}
export default VideoComponent;
