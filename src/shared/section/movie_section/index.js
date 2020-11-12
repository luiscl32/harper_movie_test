import React from 'react';
import {View} from 'react-native';

import SectionHeader from './ui/section-header';
import List from './ui/list';

import PropTypes from 'prop-types';

import s from './styles';

export default function MovieSection({
  data,
  title,
  onGoToList,
  seeAll,
  loading,
}) {
  return (
    <View style={s.container}>
      <SectionHeader title={title} onPress={onGoToList} showSeeAll={seeAll} />
      <List data={data} loading={loading} />
    </View>
  );
}

MovieSection.proptypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onGoToList: PropTypes.func,
  seeAll: PropTypes.bool,
  loading: PropTypes.bool,
};

MovieSection.defaultProps = {
  data: [],
  title: '',
  onGoToList: () => {},
  seeAll: false,
  loading: false,
};
