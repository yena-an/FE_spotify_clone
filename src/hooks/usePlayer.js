import { useDispatch, useSelector } from "react-redux";
import {
  setTrack,
  setQueue,
  togglePlay,
  playNext,
  playPrev,
  setVolume,
} from "../store/playerSlice";

const usePlayer = () => {
  const dispatch = useDispatch();
  const { currentTrack, isPlaying, volume, queue, currentIndex } = useSelector(
    (state) => state.player,
  );

  const play = (track, index, tracks) => {
    if (tracks) dispatch(setQueue(tracks));
    dispatch(setTrack({ track, index }));
  };

  const toggle = () => dispatch(togglePlay());
  const next = () => dispatch(playNext());
  const prev = () => dispatch(playPrev());
  const changeVolume = (v) => dispatch(setVolume(v));

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < queue.length - 1;

  return {
    currentTrack,
    isPlaying,
    volume,
    play,
    toggle,
    next,
    prev,
    changeVolume,
    hasPrev,
    hasNext,
  };
};

export default usePlayer;
