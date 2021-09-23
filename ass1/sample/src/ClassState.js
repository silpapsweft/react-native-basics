import React from 'react'
import {View,Text, Button} from 'react-native'

class ClassState extends React.Component{
    constructor()
    {
        super();
        this.state={
            data:"silpa"
        }
    }
    updateData(){
        this.setState({data:"silpa dhaneesh"})
    }
    render(){
        return(
            <View>
                
                <Text style={{fontSize:35}}>{this.state.data}</Text>
                <Button title="Click me" onPress={()=>this.updateData()}/>
            </View>
        )
    }
}
export default ClassState