import React from 'react'
import { View, Text } from 'react-native'

const layoutDirections = () => {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start' }}>
      <Text>hgcvh</Text>

      <View style={{ backgroundColor: "green", height: 50, alignSelf: 'stretch' }}></View>
      <View style={{ backgroundColor: "blue", width: 50, height: 50, alignSelf: 'flex-end' }}></View>
      <View style={{ backgroundColor: "green", width: 50, height: 50, alignSelf: 'flex-start' }}></View>
      <View style={{ backgroundColor: "yellow", width: 50, height: 50, alignSelf: 'center' }}></View>
      <View style={{ backgroundColor: "blue", width: 50, height: 50, alignSelf: 'baseline' }}></View>
    </View>
  )
}

export default layoutDirections
