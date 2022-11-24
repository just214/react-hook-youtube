# react-hook-youtube

![npm](https://img.shields.io/npm/v/react-hook-youtube?style=social)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-hook-youtube?style=social)
![NPM](https://img.shields.io/npm/l/react-hook-youtube?style=social)

A custom React hook for easily working with the [Youtube Player API for iframe Embeds](https://developers.google.com/youtube/iframe_api_reference).

## Example

[Try it out on CodeSandbox!](https://codesandbox.io/p/sandbox/objective-snowflake-h1uzop?selection=%5B%7B%22endColumn%22%3A18%2C%22endLineNumber%22%3A58%2C%22startColumn%22%3A18%2C%22startLineNumber%22%3A58%7D%5D&file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cl9zkf3ea000flqipb2z0667q%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%252C%2522%252Fsrc%252FApp.tsx%2522%252C%2522%252Fpackage.json%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clav60io700ad3b6g5op63qaa%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clav60hn1006k3b6gg9lvsooe%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

## Usage

### Install the Hook

```bash
npm install react-hook-youtube
```

### Use the Hook

Basic

```tsx
import * as React from "react";
import { useYoutubePlayer } from "react-hook-youtube";

export default App = () => {
  const { YoutubePlayer } = useYoutubePlayer({
    videoId: "KRvv0QdruMQ", // https://www.youtube.com/watch?v=👉🏻dQw4w9WgXcQ👈🏻
  });

  return <YoutubePlayer />;
};
```

Advanced

```tsx
import * as React from "react";
import { useYoutubePlayer } from "react-hook-youtube";

function App() {
  const [isReady, setIsReady] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const { YoutubePlayer, player } = useYoutubePlayer({
    videoId: "KRvv0QdruMQ",
    height: "390",
    width: "640",
    events: {
      onReady: (event) => {
        console.log("OnReady event fired.", event);
        setIsReady(true);
      },
      onStateChange: (event) => {
        console.log("OnStateChange event fired.", event);
        setIsPlaying(event.data === 1);
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

  function handleMute() {
    if (player.isMuted()) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  }

  return (
    <div>
      <YoutubePlayer />

      {isReady && (
        <div>
          <section style={{ marginTop: "10px" }}>
            {isPlaying ? (
              <button onClick={player.pauseVideo}>Pause</button>
            ) : (
              <button onClick={player.playVideo}>Play</button>
            )}

            <button onClick={player.stopVideo}>Stop</button>
            <button onClick={handleMute}>{isMuted ? "Unmute" : "Mute"}</button>
          </section>
          <fieldset style={{ marginTop: "20px" }}>
            <legend>Select a playback speed</legend>

            <div>
              <input
                onChange={(e) => player.setPlaybackRate(+e.target.value)}
                type="radio"
                id="25"
                name="playbackSpeed"
                value=".25"
              />
              <label htmlFor="25">25%</label>
            </div>
            <div>
              <input
                onChange={(e) => player.setPlaybackRate(+e.target.value)}
                type="radio"
                id="50"
                name="playbackSpeed"
                value=".50"
              />
              <label htmlFor="50">50%</label>
            </div>
            <div>
              <input
                onChange={(e) => player.setPlaybackRate(+e.target.value)}
                type="radio"
                id="75"
                name="playbackSpeed"
                value=".75"
              />
              <label htmlFor="75">75%</label>
            </div>
            <div>
              <input
                onChange={(e) => player.setPlaybackRate(+e.target.value)}
                type="radio"
                id="100"
                name="playbackSpeed"
                value="1"
                defaultChecked={true}
              />
              <label htmlFor="100">Normal</label>
            </div>
            <div>
              <input
                onChange={(e) => player.setPlaybackRate(+e.target.value)}
                type="radio"
                id="125"
                name="playbackSpeed"
                value="1.25"
              />
              <label htmlFor="125">125%</label>
            </div>
            <div>
              <input
                onChange={(e) => player.setPlaybackRate(+e.target.value)}
                type="radio"
                id="150"
                name="playbackSpeed"
                value="1.5"
              />
              <label htmlFor="150">150%</label>
            </div>
            <div>
              <input
                onChange={(e) => player.setPlaybackRate(+e.target.value)}
                type="radio"
                id="175"
                name="playbackSpeed"
                value="1.75"
              />
              <label htmlFor="175">175%</label>
            </div>
            <div>
              <input
                onChange={(e) => player.setPlaybackRate(+e.target.value)}
                type="radio"
                id="200"
                name="playbackSpeed"
                value="2"
              />
              <label htmlFor="200">200%</label>
            </div>
          </fieldset>
        </div>
      )}
    </div>
  );
}

export default App;
```

Please refer to the [Youtube Player API Reference](https://developers.google.com/youtube/iframe_api_reference) for all of the available player config and player control options. This package also ships with TypeScript type definitions so you can just let Intellisense guide you.

[Youtube Type Definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/youtube/index.d.ts)

TODO: Document playlist usage
