import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import Hello from './samplehello'

const funCom = () => {
    const [data, set] = useState(0)
    return (
        <View>
            <Text style={{ fontSize: 36 }}>
                Functional component
            </Text>

   
            <Button onPress={() => set(data + 1)} title="increment" />
            <Button onPress={() => set(data - 1)} title="decrement" />
            <Text style={{ fontSize: 50 }}  >{data}</Text>
            <Hello data={"hai"}/>
        
            
        </View>
    )
}
export default funCom

