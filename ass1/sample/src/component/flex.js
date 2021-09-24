import React from 'react'
import { View, Text } from 'react-native'

const flex = () => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:"red"}}></View>
            <View style={{flex:2,backgroundColor:"yellow"}}></View>
            <View style={{flex:3,backgroundColor:"green"}}></View>
            
        </View>
    )
}

export default flex
