import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const justifyContents = () => {
    const [justifyContent, setJustifyContent] = useState('flex-start');
    return (
      <>
        <View style={styles.buttonsContainer}>
          <Button
            title="flex-start"
            onPress={() => setJustifyContent('flex-start')}
          />
          <Button title="center" onPress={() => setJustifyContent('center')} />
          <Button
            title="flex-end"
            onPress={() => setJustifyContent('flex-end')}
          />
          <Button
            title="space-between"
            onPress={() => setJustifyContent('space-between')}
          />
        </View>
        <Text style={styles.text}>{`Justify content : ${justifyContent}`}</Text>
        <View style={[styles.container, {justifyContent}]}>
          <View style={styles.yellowContainer} />
          <View style={styles.redContainer} />
          <View style={styles.greenContainer} />
        </View>
      </>
    );
  };
export default justifyContents;

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
    width: 100,
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