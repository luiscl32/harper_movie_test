import React from 'react';
import {View} from 'react-native';
import {Placeholder, Fade, PlaceholderLine} from 'rn-placeholder';

import s from './styles';

export default function MovieCardLoader() {
  return (
    <View style={s.container}>
      <Placeholder Animation={Fade}>
        <PlaceholderLine width={50} height={16} style={s.img_container} />
        <PlaceholderLine
          width={50}
          height={16}
          style={{alignSelf: 'flex-start', marginTop: 10, marginBottom: 10}}
        />
        <PlaceholderLine
          width={70}
          height={16}
          style={{alignSelf: 'flex-start', marginBottom: 10}}
        />
      </Placeholder>
    </View>
  );
}
