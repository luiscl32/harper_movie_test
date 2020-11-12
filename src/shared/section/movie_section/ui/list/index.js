import React from 'react';
import {View, FlatList} from 'react-native';
import Card from 'shared/cards/movie_card';
import PropTypes from 'prop-types';

import s from './styles';

export default function List({data, loading}) {
  const loaderData = new Array(10).fill({loading: true});

  return (
    <View style={s.container}>
      <FlatList
        data={loading ? loaderData : data}
        horizontal={true}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={70}
        renderItem={({item}) => <Card item={item} />}
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
  loading: PropTypes.bool,
};

List.defaultProps = {
  data: [],
  loading: false,
};
