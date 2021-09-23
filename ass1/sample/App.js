import React from 'react'
import { View, Text } from 'react-native'
import FunPros from './src/funPros'
import ClassPros  from './src/ClassPros'

const App = () => {
  return (
    <View>
      <Text style={{fontSize:36}}>Pros In Functional Component</Text>
      <FunPros data={"Silpa"}/>
      <ClassPros count ={"hai"}/>
    </View>
  )
}

export default App
