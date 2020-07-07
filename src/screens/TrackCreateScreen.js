import React, { useContext, useCallback } from 'react';
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import useLocation from '../components/useLocation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import TrackForm from '../components/TrackForm';
import Spacer from '../components/Spacer'
import { Ionicons } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext)
  const callback = useCallback(location => {
    addLocation(location, recording)
  }, [recording])
  const [err] = useLocation(isFocused || recording, callback)

  return <SafeAreaView forceInset={{ top: 'always' }}>
    <Text h2>Create a Track</Text>
    <Map />
    {err ? <Text>Please enable location permission</Text> : null}
    <Spacer>
      <TrackForm />
    </Spacer>
  </SafeAreaView>
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <Ionicons name="ios-add-circle" size={24} color="black" />
}

export default withNavigationFocus(TrackCreateScreen)
