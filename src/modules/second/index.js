import React from 'react';
import {View} from 'react-native';
import Text from 'shared/text';
import c from 'theme/colors';
import s from './styles';

export default function Second() {
  return (
    <View style={s.container}>
      <Text color={c.white}>hola soy la segunda pantalla </Text>
    </View>
  );
}
