# react-hook-youtube

A custom React hook for easily working with the [Youtube Player API for iframe Embeds](https://developers.google.com/youtube/iframe_api_reference).

## Usage

### Install the Hook

```bash
npm install react-hook-youtube
```

### Use the Hook

Basic Example

```tsx
import React from "react";
import { useYoutubePlayer } from "react-hook-youtube";

export default App = () => {
  const { YoutubePlayer } = useYoutubePlayer({
    videoId: "KRvv0QdruMQ",
  });

  return <YoutubePlayer />;
};
```

Advanced Example

```tsx
import React from "react";
import { useYoutubePlayer, player } from "react-hook-youtube";

export default App = () => {
  const { YoutubePlayer } = useYoutubePlayer({
    videoId: "KRvv0QdruMQ",
    events: {
      onReady: (event) => {
        console.log("OnReady event fired.", event);
      },
      onStateChange: (event) => {
        console.log("OnStateChange event fired.", event);
      },
      onPlaybackRateChange: (event) => {
        console.log("OnPlaybackRateChange event fired.", event);
      },
    },
  });

  return (
    <div>
      <YoutubePlayer />
      <section>
        <button onClick={player.pauseVideo}>Pause</button>
        <button onClick={player.stopVideo}>Stop</button>
        <button onClick={player.playVideo}>Play</button>
        <button onClick={player.mute}>Mute</button>
        <button onClick={player.unMute}>Unmute</button>
      </section>
    </div>
  );
};
```
