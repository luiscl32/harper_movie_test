import React from 'react';
import {View} from 'react-native';
import Btn from 'shared/button/Btn';
import Text from 'shared/text';

import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {app_theme} from 'redux_config/selectors/index';

import c from 'theme/colors';
import s from './styles';

export default function SectionHeader({title, onPress, showSeeAll}) {
  const theme = useSelector((state) => {
    return app_theme(state);
  });

  return (
    <View style={s.container}>
      <View style={s.wrapper}>
        <Text
          color={theme ? c.white : c.primary}
          size={16}
          type={'medium'}
          align={'left'}>
          {' '}
          {title}{' '}
        </Text>

        {showSeeAll && (
          <Btn onPress={onPress}>
            <Text
              color={theme ? c.placeholder : c.text_gray}
              size={14}
              type={'regular'}
              align={'right'}>
              See all
            </Text>
          </Btn>
        )}
      </View>
    </View>
  );
}

SectionHeader.proptypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  showSeeAll: PropTypes.bool,
};

SectionHeader.defaultProps = {
  title: '',
  onPress: () => {},
  showSeeAll: true,
};
