import React from 'react';
import {Pressable} from 'react-native';
import {ripple_config} from 'utils/ripple-config';

export default function Btn({onPress, children}) {
  return (
    <Pressable android_ripple={ripple_config} onPress={onPress}>
      {children}
    </Pressable>
  );
}
