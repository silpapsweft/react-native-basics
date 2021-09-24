import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const flexDirections = () => {
  const [flexDirection, setFlexDirection] = useState('column');
  return (
    <>
      <View style={styles.buttonsContainer}>
        <Button title="column" onPress={() => setFlexDirection('column')} />
        <Button title="row" onPress={() => setFlexDirection('row')} />
        <Button
          title="row-reverse"
          onPress={() => setFlexDirection('row-reverse')}
        />
        <Button
          title="column-reverse"
          onPress={() => setFlexDirection('column-reverse')}
        />
      </View>

      <Text style={styles.text}>{`Flex direction : ${flexDirection}`}</Text>
      <View style={[styles.container, {flexDirection}]}>
        <View style={styles.yellowContainer} />
        <View style={styles.redContainer} />
        <View style={styles.greenContainer} />
      </View>
    </>
  );
};

export default flexDirections;

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