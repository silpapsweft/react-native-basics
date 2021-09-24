import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const alignItems = () => {
    
        const [alignItems, setalignItems] = useState('flex-start');
        return (
          <>
            <View style={styles.buttonsContainer}>
              <Button
                title="flex-start"
                onPress={() => setalignItems('flex-start')}
              />
              <Button title="center" onPress={() => setalignItems('center')} />
              <Button title="flex-end" onPress={() => setalignItems('flex-end')} />
              <Button title="stretch" onPress={() => setalignItems('stretch')} />
              <Button title="baseline" onPress={() => setalignItems('baseline')} />
            </View>
      
            <Text style={styles.text}>{`Justify content : ${alignItems}`}</Text>
            <View style={[styles.container, {alignItems}]}>
              <View style={styles.yellowContainer} />
              <View style={styles.redContainer} />
              <View style={styles.greenContainer} />
            </View>
          </>
        );
      };
export default alignItems;

const styles = StyleSheet.create({
  text: {fontSize: 30},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  yellowContainer: {
    backgroundColor: 'yellow',

    height: 100,
  },
  redContainer: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  greenContainer: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
});