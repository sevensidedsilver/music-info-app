import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    {title: 'White Flag (Tara Walsh)',
    artist: 'White Bear'},

    {title: 'Villianous',
    artist: 'Bogtrotter'},

    {title: 'Headwork',
    artist: 'Land Switcher'},

    {title: 'Steering Through',
    artist: 'Tribone'},
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
