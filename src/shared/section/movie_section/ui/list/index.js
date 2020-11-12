import {prop} from 'ramda';
import React from 'react';
import {View, FlatList} from 'react-native';
import Card from 'shared/cards/movie_card';
import PropTypes from 'prop-types';

import s from './styles';

export default function List({data}) {
  const dummyData = new Array(20).fill({
    name: 'Avengers: Endgame',
    imgurl:
      'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
    stars: 5,
  });

  return (
    <View style={s.container}>
      <FlatList
        data={data}
        horizontal={true}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={70}
        renderItem={({item, index}) => <Card item={item} />}
        keyExtractor={(item, index) => `${item}-${index}`}
        ItemSeparatorComponent={() => <View style={s.separator} />}
        ListFooterComponent={() => <View style={s.separator} />}
        ListHeaderComponent={() => <View style={s.separator} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
};

List.defaultProps = {
  data: [],
};
