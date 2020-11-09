import React from 'react';
import {View} from 'react-native';
import Text from 'shared/text';
import Button from 'shared/button/main';

import s from './styles';
import c from 'theme/colors';

import {useNavigation} from '@react-navigation/native';

export default function Dashboard() {
  const {navigate} = useNavigation();

  function _navigate() {
    navigate('second');
  }

  return (
    <View style={s.main}>
      <Text color={c.white}>hola mundo asdads</Text>
      <Button
        color={c.light_gray}
        textColor={c.dark_gray}
        onPress={_navigate}
        title={'press me!'}
      />
    </View>
  );
}
