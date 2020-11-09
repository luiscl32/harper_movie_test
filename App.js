import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Navigator from 'navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={s.safeArea}>
        <Navigator />
      </SafeAreaView>
    </>
  );
};

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
