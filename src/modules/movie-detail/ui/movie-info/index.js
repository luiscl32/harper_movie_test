import React from 'react';
import {View} from 'react-native';

import Text from 'shared/text';

import PropTypes from 'prop-types';
import c from 'theme/colors';
import s from './styles';

export default function MovieInfo({studio, gender, release}) {
  return (
    <View style={s.container}>
      <View style={[s.wrapper, {marginTop: 10}]}>
        <Text color={c.white} type={'bold'} size={16} align={'left'}>
          Studio:{' '}
        </Text>
        <Text color={c.white} type={'light'} size={16} align={'left'}>
          {studio}
        </Text>
      </View>

      <View style={[s.wrapper, {marginTop: 10}]}>
        <Text color={c.white} type={'bold'} size={16} align={'left'}>
          Gender:{' '}
        </Text>
        <Text color={c.white} type={'light'} size={16} align={'left'}>
          {gender}
        </Text>
      </View>

      <View style={[s.wrapper, {marginTop: 10}]}>
        <Text color={c.white} type={'bold'} size={16} align={'left'}>
          Release:{' '}
        </Text>
        <Text color={c.white} type={'light'} size={16} align={'left'}>
          {release}
        </Text>
      </View>
    </View>
  );
}

MovieInfo.propTypes = {
  studio: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
};

MovieInfo.defaultProps = {
  studio: 'Warner Bros',
  gender: 'Action, Fantasy, Comedy',
  release: 2018,
};
