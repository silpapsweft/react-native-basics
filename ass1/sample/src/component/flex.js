import React from 'react'
import { View, Text } from 'react-native'

const flex = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2, backgroundColor: "red" }}>
            </View>
        
            <View style={{ flex: 1,flexDirection:"row" }}>

                <View style={{ flex: 0.5, backgroundColor: "white" }}>
                </View> 
                 <View style={{ flex: 0.5, backgroundColor: "blue" }}>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{flex:1,flexDirection:"row-reverse"}}>
                       <View style={{flex:1}}>
                           <View style={{flex:1,backgroundColor:"green",}}></View>
                           <View style={{flex:1,backgroundColor:"yellow",}}></View>
                           <View style={{flex:1,backgroundColor:"black",}}></View>
                       </View>
                       <View style={{flex:2,backgroundColor:"white"}}></View>
                    </View>
                    <View style={{flex:1,flexDirection:'column-reverse'}}>
                        <View style={{flex:2,backgroundColor:"yellow"}}></View>
                        <View style={{flex:1,backgroundColor:"red"}}></View>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: "green", flex: .5, alignItems: 'center', justifyContent: 'center' }}><Text>sample text</Text></View>

        </View>
    )
}

export default flex
