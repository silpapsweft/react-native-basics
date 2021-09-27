import React from 'react'
import { View, Text } from 'react-native'

const flexWrap = () => {
    return (
        <View style={{flex:1,alignContent:'',flexWrap:'wrap'}}>
            <View style={{ width:50,height:100, backgroundColor: "green", }}></View>
            <View style={{ width:50,height:100,  backgroundColor: "yellow", }}></View>
            <View style={{ width:50,height:100, backgroundColor: "black", }}></View>
            <View style={{ width:50,height:100, backgroundColor: "green", }}></View>
            <View style={{ width:50,height:100,  backgroundColor: "yellow", }}></View>
            <View style={{ width:50,height:100, backgroundColor: "black", }}></View>
            <View style={{ width:50,height:100,  backgroundColor: "yellow", }}></View>
            <View style={{ width:50,height:100, backgroundColor: "black", }}></View>
            <View style={{ width:50,height:100,  backgroundColor: "yellow", }}></View>
            <View style={{ width:50,height:100, backgroundColor: "black", }}></View>
        </View>
    )
}

export default flexWrap
