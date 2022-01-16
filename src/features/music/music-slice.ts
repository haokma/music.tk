import { createSlice } from '@reduxjs/toolkit';
interface MusicState {
  data: any;
  loading: true | false;
  _id_music: string;
  dataRandom: any[];
  index: number;
  playing: true | false;
  audio: any;
  dropdownMusic: true | false;
  pagination?: any;
  id_playlist?: string;
  error?: boolean;
}

const initialState: MusicState = {
  data: {} as any,
  loading: false,
  _id_music: '',
  id_playlist: '',
  dataRandom: [],
  index: 0,
  playing: true,
  audio: null,
  dropdownMusic: false,
  pagination: {} as any,
  error: false,
};
export const musicSlice = createSlice({
  name: 'music',
  initialState: initialState,
  reducers: {
    onPauseMusic: (state: any, action) => {
      state.playing = action.payload;
    },
    onAudio: (state: any, action) => {
      state.audio = action.payload;
    },
    addIndexMusic: (state: any, action) => {
      const { data, index, _id } = action.payload;
      state.index = index;
      state.data = data[index];
      state._id_music = _id;
      state.dataRandom = data;
    },
    onDropdownMusic: (state: MusicState, action: any) => {
      state.dropdownMusic = action.payload;
    },
    onNextPrevMusic: (state: MusicState, action: any) => {
      const index = action.payload;
      if (index >= 0) {
        if (state.dataRandom[index]) {
          state.data = state.dataRandom[index];
          state.index = index;
          state._id_music = state.dataRandom[index]._id;
          state.playing = true;
        }
      }
    },
    onRandomMusic: (state: MusicState) => {
      const random = Math.floor(
        Math.random() * state.dataRandom.length
      );
      state.data = state.dataRandom[random];
      state._id_music = state.dataRandom[random]._id;
      state.playing = true;
    },
  },
});

const { actions, reducer } = musicSlice;
export const {
  onPauseMusic,
  onAudio,
  addIndexMusic,
  onDropdownMusic,
  onNextPrevMusic,
  onRandomMusic,
} = actions;
export default reducer;
