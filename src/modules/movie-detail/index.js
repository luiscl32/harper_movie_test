import React from 'react';
import {View} from 'react-native';
import MovieHeader from './ui/movie-header';
import Description from './ui/description';
import Actors from './ui/actors';

import s from './styles';

export default function MovieDetail({route, navigation}) {
  const {item} = route?.params;

  return (
    <View style={s.container}>
      <MovieHeader img={item?.imgurl} />
      <Description name={item?.name} />
      <Actors />
    </View>
  );
}
