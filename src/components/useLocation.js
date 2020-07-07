import { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location'

export default (track, callback) => {
  const [err, setErr] = useState(null)

  useEffect(() => {
    let subscriber
    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        subscriber = await watchPositionAsync({
          Accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        }, callback)
        if (!granted) throw new Error('Location permission not granted');
      } catch (e) {
        setErr(e);
      }
    }

    if (track) {
      startWatching()
    } else {
      if (subscriber) subscriber.remove()
      subscriber = null
    }

    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }
  }, [track, callback])

  return [err]
}