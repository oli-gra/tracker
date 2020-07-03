import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { navigate } from '../navRef'

const NavLink = ({ text, route }) => {
  return <TouchableOpacity onPress={() => navigate(route)}>
    <Spacer>
      <Text style={styles.link}>
        {text}
      </Text>
    </Spacer>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  link: {
    marginLeft: 15,
    color: 'blue'
  },
})

export default NavLink;