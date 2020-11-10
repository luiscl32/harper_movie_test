import React from 'react';
import {View} from 'react-native';

import SectionHeader from './ui/section-header';
import List from './ui/list';

import PropTypes from 'prop-types';

import s from './styles';

export default function MovieSection({endpoint, title, onGoToList, seeAll}) {
  return (
    <View style={s.container}>
      <SectionHeader title={title} onPress={onGoToList} showSeeAll={seeAll} />
      <List data={[]} endpoint={endpoint} />
    </View>
  );
}

MovieSection.proptypes = {
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onGoToList: PropTypes.func,
  seeAll: PropTypes.bool,
};

MovieSection.defaultProps = {
  endpoint: '',
  title: '',
  onGoToList: () => {},
  seeAll: false,
};
