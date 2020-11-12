import React from 'react';
import {View} from 'react-native';

import moment from 'moment';

import Text from 'shared/text';

import PropTypes from 'prop-types';
import c from 'theme/colors';
import s from './styles';

export default function MovieInfo({studio, gender, release}) {
  return (
    <View style={s.container}>
      <View style={[s.wrapper, {marginTop: 10, flexWrap: 'wrap'}]}>
        <Text color={c.white} type={'bold'} size={16} align={'left'}>
          Studio:{' '}
        </Text>
        {studio.map((item, i) => (
          <Text key={i} color={c.white} type={'light'} size={16} align={'left'}>
            {item.name}
            {','}
          </Text>
        ))}
      </View>

      <View style={[s.wrapper, {marginTop: 10}]}>
        <Text color={c.white} type={'bold'} size={16} align={'left'}>
          Gender:{' '}
        </Text>
        {gender.map((item, i) => (
          <Text key={i} color={c.white} type={'light'} size={16} align={'left'}>
            {item.name}
            {','}
          </Text>
        ))}
      </View>

      <View style={[s.wrapper, {marginTop: 10, flexWrap: 'wrap'}]}>
        <Text color={c.white} type={'bold'} size={16} align={'left'}>
          Release:{' '}
        </Text>
        <Text color={c.white} type={'light'} size={16} align={'left'}>
          {moment(release).format('YYYY')}
        </Text>
      </View>
    </View>
  );
}

MovieInfo.propTypes = {
  studio: PropTypes.array.isRequired,
  gender: PropTypes.array.isRequired,
  release: PropTypes.string.isRequired,
};

MovieInfo.defaultProps = {
  studio: [],
  gender: [],
  release: '',
};
