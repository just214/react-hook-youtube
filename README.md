# react-hook-youtube

![npm](https://img.shields.io/npm/v/react-hook-youtube?style=social)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-hook-youtube?style=social)
![NPM](https://img.shields.io/npm/l/react-hook-youtube?style=social)

A custom React hook for easily working with the [Youtube Player API for iframe Embeds](https://developers.google.com/youtube/iframe_api_reference).

## Example

[Try it out on CodeSandbox!](https://codesandbox.io/s/react-hook-youtube-demo-8r1y9c)

## Usage

### Install the Hook

```bash
npm install react-hook-youtube
```

### Use the Hook

Basic Example

```tsx
import * as React from "react";
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
import * as React from "react";
import { useYoutubePlayer } from "react-hook-youtube";

export default App = () => {
  const { YoutubePlayer, player } = useYoutubePlayer({
    videoId: "KRvv0QdruMQ",
    height: "390",
    width: "640",
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: (event) => {
        console.log("OnReady event fired.", event);
      },
      onStateChange: (event) => {
        console.log("OnStateChange event fired.", event);
      },
      onPlaybackQualityChange: (event) => {
        console.log("onPlaybackQualityChange event fired.", event);
      },
      onPlaybackRateChange: (event) => {
        console.log("OnPlaybackRateChange event fired.", event);
      },
      onError: (event) => {
        console.log("onError event fired.", event);
      },
      onApiChange: (event) => {
        console.log("onApiChange event fired.", event);
      },
    },
  });

  return (
    <div>
      <YoutubePlayer className="my-video-player" id="my-unique-id" />
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

Please refer to the [Youtube Player API Reference](https://developers.google.com/youtube/iframe_api_reference) for all of the available player config and player control options. This package also ships with TypeScript type definitions so you can just let Intellisense guide you.

[Youtube Type Definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/youtube/index.d.ts)

TODO: Document playlist usage
