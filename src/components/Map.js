import React, { useContext } from 'react';
import { StyleSheet } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'
import { ActivityIndicator } from 'react-native-paper';

const Map = () => {
  const { state: { currentLocation, locations } } = useContext(LocationContext)
  if (!currentLocation) {
    return <ActivityIndicator size="large" />
  }

  return <MapView
    style={styles.map}
    initialRegion={{
      ...currentLocation.coords,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  >
    <Circle
      center={currentLocation.coords}
      radius={30}
      strokeColor="rgba(10, 10, 10, 1.0)"
      fillColor="rgba(10, 10, 10, 0.3)"
    />
    <Polyline coordinates={locations.map(loc => loc.coords)} />
  </MapView>
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map;