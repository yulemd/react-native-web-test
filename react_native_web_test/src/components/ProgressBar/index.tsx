import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Bar} from 'react-native-progress';

export const ProgressBar = () => {
  return (
    <View>
      <Text style={styles.progressBar}>
        Our ProgressBar from src/components!
      </Text>
      <Bar
        borderWidth={6}
        width={240}
        borderColor={'yellow'}
        color={'blue'}
        unfilledColor={'green'}
        progress={1}
        useNativeDriver
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    marginTop: 20,
  },
});
