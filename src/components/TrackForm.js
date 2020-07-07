import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from './useSaveTrack'
import Spacer from './Spacer'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext)
  const [saveTrack] = useSaveTrack()

  return <>
    <Input placeholder="Track name" value={name} onChangeText={changeName} />
    <Spacer>
      {recording
        ? <Button title="Stop" onPress={stopRecording} />
        : <Button title="Start recording" onPress={startRecording} />
      }
    </Spacer>
    <Spacer>
      {!recording && locations.length
        ? <Button
          title="Save"
          onPress={saveTrack}
        />
        : null
      }
    </Spacer>
  </>
}

export default TrackForm;