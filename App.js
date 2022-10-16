import React, { Component } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'

export default function App() {
  return (
    <View style={styles.container}>
    <RNCamera
      style={{ flex: 1, alignItems: 'center' }}
      ref={ref => {
        this.camera = ref
      }}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
