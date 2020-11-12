import React from 'react';
import Input from 'shared/input';
import Icon from 'react-native-vector-icons/Ionicons';

import c from 'theme/colors';
import s from './styles';

import PropTypes from 'prop-types';
import {View} from 'react-native';

export default function SearchBar({onChangeText, value}) {
  return (
    <View style={s.container}>
      <View style={s.wrapper}>
        <View style={s.icon_container}>
          <Icon name={'search'} size={20} color={c.white} />
        </View>
        <View style={s.input_container}>
          <Input
            onChangeText={onChangeText}
            value={value}
            placeholder={'Search'}
            color={'transparent'}
            placeholderTextColor={c.placeholder}
            selectionColor={c.white}
            textColor={c.white}
          />
        </View>
      </View>
    </View>
  );
}

SearchBar.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

SearchBar.defaultProps = {
  onChangeText: () => {},
  value: '',
};
