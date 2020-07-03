import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return <SafeAreaView forceInsert={{ top: 'always' }}>
    <Spacer>
      <Text style={styles.title}>Account Screen</Text>
    </Spacer>
    <Spacer>
      <Button title="Sign Out" onPress={signout} />
    </Spacer>
  </SafeAreaView>
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36
  },
});

export default AccountScreen;
