import { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location'

export default (track, callback) => {
  const [err, setErr] = useState(null)
  const [subscriber, setSubscriber] = useState(null)

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      const sub = await watchPositionAsync({
        Accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      },
        callback
      )
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      setSubscriber(sub)
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (track) {
      startWatching()
    } else {
      subscriber.remove()
      setSubscriber(null)
    }
  }, [track])

  return [err]
}