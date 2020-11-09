function _getFont(type) {
  const fonts = {
    bold: 'Roboto-Bold',
    medium: 'Roboto-Medium',
    light: 'Roboto-Light',
    heavy: 'Roboto-Heavy',
    regular: 'Roboto-Regular',
    black: 'Roboto-Black',
    default: 'Roboto-Regular',
  };

  return fonts[type];
}

export {_getFont};
