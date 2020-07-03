import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
import useLocation from '../components/useLocation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import TrackForm from '../components/TrackForm';
import Spacer from '../components/Spacer'

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext)
  const [err] = useLocation(isFocused, location => {
    addLocation(location, state.recording)
  })

  return <SafeAreaView forceInset={{ top: 'always' }}>
    <Text h2>Create a Track</Text>
    <Map />
    {err ? <Text>Please enable location permission</Text> : null}
    <Spacer>
      <TrackForm />
    </Spacer>
  </SafeAreaView>
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen)
