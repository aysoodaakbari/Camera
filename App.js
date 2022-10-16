import React from 'react'
import { StyleSheet, View,TouchableOpacity,SafeAreaView} from 'react-native'
import { RNCamera } from 'react-native-camera'

export default function App() {
  return (
    <View style={styles.screen}>
    <SafeAreaView style={styles.saveArea}>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitleText}> CamScanner</Text>
      </View>
    </SafeAreaView>

    <RNCamera style={styles.rnCamera} />
    <View style={styles.cameraControl}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>New QR Scan</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    backgroundColor: '#62d1bc', // green
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitleText: {
    color: '#ffffff', // white
    fontSize: 20,
  },
  rnCamera: {
    flex: 1,
    width: '94%',
    alignSelf: 'center',
  }

});
