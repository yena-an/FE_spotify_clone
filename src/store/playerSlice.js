import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTrack: null, // { id, title, artist, cover, duration }
  isPlaying: false,
  volume: 1,
  queue: [],
  currentIndex: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.currentTrack = action.payload.track;
      state.currentIndex = action.payload.index ?? 0;
      state.isPlaying = true;
    },
    setQueue: (state, action) => {
      state.queue = action.payload;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    playNext: (state) => {
      if (state.currentIndex < state.queue.length - 1) {
        state.currentIndex += 1;
        state.currentTrack = state.queue[state.currentIndex];
        state.isPlaying = true;
      }
    },
    playPrev: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        state.currentTrack = state.queue[state.currentIndex];
        state.isPlaying = true;
      }
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const { setTrack, setQueue, togglePlay, playNext, playPrev, setVolume } =
  playerSlice.actions;

export default playerSlice.reducer;
