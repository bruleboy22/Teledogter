import React, { useState } from 'react';
import AgoraUIKit from 'agora-react-uikit';
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const config = { mode: "rtc", codec: "vp8" };

const Video = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '0e13efe68b43494a8cb3ce2c67f63665',
    channel: 'Teledogter', // your Agora channel name
    token: '007eJxTYDD9+26jaVpe/FJRRvupO0MnzV1zmDH/9vkv3Ibiq8ovP+JVYDBINTROTUs1s0gyMTaxNEm0SE4yTk41SjYzTzMzNjMzdZ8amtoQyMiQ/lOSiZEBAkF8LoaQ1JzUlPz0ktQiBgYAFuohlw==', // use null or skip if using the app in testing mode
  };
  const { ready, tracks } = createMicrophoneAndCameraTracks();
  const client = createClient(config);

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  // Define your custom CSS styles here
  const customStyles = {
    container: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
    },
    videoPlayer: {
      height: '100%',
      width: '100%',
      // Add more video player styles here
    },
    // Add more custom styles as needed
  };

  return (
    <div style={customStyles.container}>
      {videoCall && ready && (
        <AgoraVideoPlayer videoTrack={tracks[1]} style={customStyles.videoPlayer} />
      )}
      {videoCall ? (
        <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
      ) : (
        <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
      )}
    </div>
  );
};

export default Video;
