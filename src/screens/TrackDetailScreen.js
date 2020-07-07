import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext)
  const _id = navigation.getParam('_id')
  const track = state.find(t => t._id === _id)
  const initCoords = track.locations[0].coords
  return <>
    <Text style={styles.name}>{track.name}</Text>
    <MapView
      style={styles.map}
      initialRegion={{
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        ...initCoords
      }}>
      <Polyline coordinates={track.locations.map(l => l.coords)} />
    </MapView>
  </>
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20
  },
  map: {
    height: 300
  }
});

export default TrackDetailScreen;
