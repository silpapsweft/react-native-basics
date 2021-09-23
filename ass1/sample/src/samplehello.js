import React from 'react'
import {
    View,
    Text
} from 'react-native'


const samplehello = (props) => {
    console.warn("props",props)
    return (
        <View>
            <Text style={{ fontSize: 36 }}>Hello world!</Text>
        
            <Text style={{fontSize: 28}}>{props.data}</Text>
           
        </View>
    )
}
export default samplehello