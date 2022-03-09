import * as React from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

export type YoutubePlayerProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type PlayerProps = YT.Player;

// window.onYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady || {};

export function useYoutubeIframe(options: YT.PlayerOptions): {
  YoutubePlayer: React.FC<YoutubePlayerProps> | null;
  player: YT.Player;
} {
  const playerRef = React.useRef<any>();

  // COMPONENT
  const YoutubePlayer =
    React.useMemo((): React.FC<YoutubePlayerProps> | null => {
      return !options.videoId
        ? null
        : (props) => (
            <div
              className={props.className || ""}
              style={props.style}
              id={`youtube-player-${options.videoId}`}
            />
          );
    }, [options.videoId]);

  /**
   * Queueing functions
   */

  const loadVideoById = React.useCallback(
    (videoId, startSeconds, suggestedVideoQuality) => {
      return playerRef.current?.loadVideoById(
        videoId,
        startSeconds,
        suggestedVideoQuality
      );
    },
    []
  ) as YT.Player["loadVideoById"];

  const cueVideoById = React.useCallback(
    (videoId, startSeconds, suggestedVideoQuality) => {
      return playerRef.current?.cueVideoById(
        videoId,
        startSeconds,
        suggestedVideoQuality
      );
    },
    []
  ) as YT.Player["cueVideoById"];

  const cuePlaylist = React.useCallback((playlist, index, startSeconds) => {
    return playerRef.current?.cuePlaylist(playlist, index, startSeconds);
  }, []) as YT.Player["cuePlaylist"];

  const loadPlaylist = React.useCallback((playlist, index, startSeconds) => {
    return playerRef.current?.loadPlaylist(playlist, index, startSeconds);
  }, []) as YT.Player["loadPlaylist"];

  /**
   * Playback controls and player settings
   */
  const playVideo = React.useCallback(() => {
    return playerRef.current?.playVideo();
  }, []) as YT.Player["playVideo"];

  const pauseVideo = React.useCallback(() => {
    return playerRef.current?.pauseVideo();
  }, []) as YT.Player["pauseVideo"];

  const stopVideo = React.useCallback(() => {
    return playerRef.current?.stopVideo();
  }, []) as YT.Player["stopVideo"];

  const seekTo = React.useCallback((seconds, allowSeekAhead) => {
    return playerRef.current?.seekTo(seconds, allowSeekAhead);
  }, []) as YT.Player["seekTo"];

  /*
   * Controlling playback of 360° videos
   */
  const getSphericalProperties = React.useCallback(() => {
    return playerRef.current?.getSphericalProperties();
  }, []) as YT.Player["getSphericalProperties"];

  const setSphericalProperties = React.useCallback((args) => {
    return playerRef.current?.setSphericalProperties(args);
  }, []) as YT.Player["setSphericalProperties"];

  /**
   * Playing a video in a playlist
   */
  const nextVideo = React.useCallback(() => {
    return playerRef.current?.nextVideo();
  }, []) as YT.Player["nextVideo"];

  const previousVideo = React.useCallback(() => {
    return playerRef.current?.previousVideo();
  }, []) as YT.Player["previousVideo"];

  const playVideoAt = React.useCallback((index) => {
    return playerRef.current?.playVideoAt(index);
  }, []) as YT.Player["playVideoAt"];

  /**
   * Changing the player volume
   */
  const mute = React.useCallback(() => {
    return playerRef.current?.mute();
  }, []) as YT.Player["mute"];

  const unMute = React.useCallback(() => {
    return playerRef.current?.unMute();
  }, []) as YT.Player["unMute"];

  const isMuted = React.useCallback(() => {
    return playerRef.current?.isMuted();
  }, []) as YT.Player["isMuted"];

  const setVolume = React.useCallback((num) => {
    return playerRef.current?.setVolume(num);
  }, []) as YT.Player["setVolume"];

  const getVolume = React.useCallback(() => {
    return playerRef.current?.getVolume();
  }, []) as YT.Player["getVolume"];

  /**
   * Setting the player size
   */
  const setSize = React.useCallback((width, height) => {
    return playerRef.current?.setSize(width, height);
  }, []) as YT.Player["setSize"];

  /**
   * Setting the playback rate
   */
  const getPlaybackRate = React.useCallback(() => {
    return playerRef.current?.getPlaybackRate();
  }, []) as YT.Player["getPlaybackRate"];

  const setPlaybackRate = React.useCallback((suggestedRate) => {
    return playerRef.current?.setPlaybackRate(suggestedRate);
  }, []) as YT.Player["setPlaybackRate"];

  const getAvailablePlaybackRates = React.useCallback(() => {
    return playerRef.current?.getAvailablePlaybackRates();
  }, []) as YT.Player["getAvailablePlaybackRates"];

  /**
   *  Setting playback behavior for playlists
   */
  const setLoop = React.useCallback((loopPlaylists) => {
    return playerRef.current?.setLoop(loopPlaylists);
  }, []) as YT.Player["setLoop"];

  const setShuffle = React.useCallback((shufflePlaylist) => {
    return playerRef.current?.setShuffle(shufflePlaylist);
  }, []) as YT.Player["setShuffle"];

  /**
   * Playback status
   */
  const getVideoLoadedFraction = React.useCallback(() => {
    return playerRef.current?.getVideoLoadedFraction();
  }, []) as YT.Player["getVideoLoadedFraction"];

  const getPlayerState = React.useCallback(() => {
    return playerRef.current?.getPlayerState();
  }, []) as YT.Player["getPlayerState"];

  const getCurrentTime = React.useCallback(() => {
    return playerRef.current?.getCurrentTime();
  }, []) as YT.Player["getCurrentTime"];

  /**
   *   Retrieving video information
   */
  const getDuration = React.useCallback(() => {
    return playerRef.current?.getDuration();
  }, []) as YT.Player["getDuration"];

  const getVideoUrl = React.useCallback(() => {
    return playerRef.current?.getVideoUrl();
  }, []) as YT.Player["getVideoUrl"];

  const getVideoEmbedCode = React.useCallback(() => {
    return playerRef.current?.getVideoEmbedCode();
  }, []) as YT.Player["getVideoEmbedCode"];

  /**
   * Retrieving playlist information
   */
  const getPlaylist = React.useCallback(() => {
    return playerRef.current?.getPlaylist();
  }, []) as YT.Player["getPlaylist"];

  const getPlaylistIndex = React.useCallback(() => {
    return playerRef.current?.getPlaylistIndex();
  }, []) as YT.Player["getPlaylistIndex"];

  /**
   * Adding or removing an event listener
   */
  const addEventListener = React.useCallback(() => {
    return playerRef.current?.addEventListener();
  }, []) as YT.Player["addEventListener"];

  const removeEventListener = React.useCallback(() => {
    return playerRef.current?.removeEventListener();
  }, []) as YT.Player["removeEventListener"];

  /**
   * Accessing and modifying DOM nodes
   */
  const getIframe = React.useCallback(() => {
    return playerRef.current?.getIframe();
  }, []) as YT.Player["getIframe"];

  const destroy = React.useCallback(() => {
    return playerRef.current?.destroy();
  }, []) as YT.Player["destroy"];

  // INTERNAL

  const onPlayerReady = (event: any) => {
    // Set up the player ref
    playerRef.current = event.target;
    options.events?.onReady?.(event);
  };

  function loadVideo() {
    new YT.Player(`youtube-player-${options.videoId}`, {
      videoId: options.videoId,
      playerVars: options.playerVars,
      height: options.height || 390,
      width: options.width || 640,
      events: {
        ...options.events,
        onReady: onPlayerReady,
      },
    });
  }

  React.useEffect(() => {
    if (window && !window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      // @ts-ignore
      window.onYouTubeIframeAPIReady = loadVideo;
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    } else {
      loadVideo();
    }
  }, []);

  return {
    YoutubePlayer,
    player: {
      cueVideoById,
      loadVideoById,
      cuePlaylist,
      loadPlaylist,
      pauseVideo,
      stopVideo,
      playVideo,
      seekTo,
      getSphericalProperties,
      setSphericalProperties,
      nextVideo,
      previousVideo,
      playVideoAt,
      mute,
      unMute,
      isMuted,
      setVolume,
      getVolume,
      setSize,
      getPlaybackRate,
      setPlaybackRate,
      getAvailablePlaybackRates,
      setLoop,
      setShuffle,
      getVideoLoadedFraction,
      getPlayerState,
      getCurrentTime,
      getDuration,
      getVideoUrl,
      getVideoEmbedCode,
      getPlaylist,
      getPlaylistIndex,
      addEventListener,
      removeEventListener,
      getIframe,
      destroy,
    },
  } as {
    YoutubePlayer: React.FC<YoutubePlayerProps> | null;
    player: YT.Player;
  };
}
