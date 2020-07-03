import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'change_name':
      return { ...state, name: payload.name }
    case 'start_rec':
      return { ...state, recording: true }
    case 'stop_rec':
      return { ...state, recording: false }
    case 'add_current_loc':
      return { ...state, currentLocation: action.payload }
    case 'add_loc':
      return { ...state, locations: [...state.locations, action.payload] }
    default:
      return state
  }
}

const changeName = dispatch => name => {
  dispatch({ type: 'change_name', payload: name })
}
const startRecording = dispatch => () => {
  dispatch({ type: 'start_rec' })
}
const stopRecording = dispatch => () => {
  dispatch({ type: 'stop_rec' })
}
const addLocation = dispatch => (location, recording) => {
  dispatch({ type: 'add_current_loc', payload: location })
  if (recording) {
    dispatch({ type: 'add_loc', payload: location })
  }
}

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  { name: '', recording: false, locations: [], currentLocation: null }
)