import React from 'react';
import {View} from 'react-native';
import Text from 'shared/text';

import c from 'theme/colors';
import s from './styles';

export default function Search() {
  return (
    <View style={s.container}>
      <Text color={c.white} size={30} align={'left'} type={'black'} mb={15}>
        {`Hello, do you\nwant to watch`}
      </Text>

      <View style={s.search_container}></View>
    </View>
  );
}
