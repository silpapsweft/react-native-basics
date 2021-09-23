import React from 'react'
import {View,Text} from 'react-native'

class ClassPros extends React.Component{
    render()
    {
        return(
            <View>
                <Text>{this.props.count}</Text>
            </View>
        )
    }
}
export default ClassPros