import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import storefn from './src/redux_config/store';

import Navigator from 'navigation';
import {Provider} from 'react-redux';

const store = storefn();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={s.safeArea}>
        <Provider store={store}>
          <Navigator />
        </Provider>
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
