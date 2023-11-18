import React, { useState } from 'react';
import AgoraUIKit from 'agora-react-uikit';
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const config = { mode: "rtc", codec: "vp8" };

const Video = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '0e13efe68b43494a8cb3ce2c67f63665',
    channel: 'Teledogter',
    token: '007eJxTYNDQZfZeZduonbto3cKnzusC415ox8zw/3/i6P/DLhNfK9xVYDBINTROTUs1s0gyMTaxNEm0SE4yTk41SjYzTzMzNjMzjW8OT20IZGTwFktlZmSAQBCfiyEkNSc1JT+9JLWIgQEAIOghrw==', // use null or skip if using the app in testing mode
  };
  const { ready, tracks } = createMicrophoneAndCameraTracks();
  const client = createClient(config);

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  const customStyles = {
    container: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
    },
    videoPlayer: {
      height: '100%',
      width: '100%',
    },
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
