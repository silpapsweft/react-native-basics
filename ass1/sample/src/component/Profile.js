import React,{useEffect} from 'react';
import { View, Text } from 'react-native'


const Profile = (props) =>{
    useEffect(() => {
        console.warn("props",props)
    })
    
    return(
        <View>
          <Text>Profile {props.data}</Text>
        </View>
    )
}
export default Profile