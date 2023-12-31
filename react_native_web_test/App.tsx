import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Bar} from 'react-native-progress';

import {ProgressBar as RiznaProgressBar} from './rizna-components/ProgressBar';
import {ProgressBar} from './src/components/ProgressBar';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Hello from {'\n'}React Native Web!</Text>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={styles.button}>
          <Text>Click me!</Text>
        </TouchableOpacity>

        <Text>You clicked {count} times!</Text>

        <Text style={styles.progressBar}>Our ProgressBar!</Text>

        <Bar
          borderWidth={6}
          width={240}
          borderColor={'yellow'}
          color={'blue'}
          unfilledColor={'green'}
          progress={0}
          useNativeDriver
        />
        <ProgressBar />
        <RiznaProgressBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
  progressBar: {
    marginTop: 20,
  },
});

export default App;
