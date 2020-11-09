import React from 'react';
import {TextInput, View} from 'react-native';

import c from 'theme/colors';
import s from './styles';

import PropTypes from 'prop-types';

export default function Input({
  color,
  textColor,
  placeholderTextColor,
  selectionColor,
  placeholder,
  onChangeText,
  value,
}) {
  return (
    <View style={s.container(color)}>
      <TextInput
        style={s.input(textColor)}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
      />
    </View>
  );
}

Input.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  selectionColor: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  color: c.white,
  textColor: c.light_gray,
  placeholderTextColor: c.light_gray,
  selectionColor: c.light_gray,
  placeholder: '',
  onChangeText: () => {},
  value: () => {},
};
