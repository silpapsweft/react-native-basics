import React from 'react'
import {View,Text} from 'react-native'

export class Cat extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Cat Component
                </Text>
            </View>
        )
    }
}

class classCom extends React.Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:40}}>
                    Class components
                </Text>
            </View>
        )
    }
}
export default classCom