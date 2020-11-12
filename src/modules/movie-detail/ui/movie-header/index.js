import React from 'react';
import {View, ImageBackground} from 'react-native';
import Btn from 'shared/button/Btn';

import Icon from 'react-native-vector-icons/Ionicons';

import c from 'theme/colors';
import s from './styles';

import {convertImage} from 'utils/helpers';

import {useNavigation} from '@react-navigation/native';

export default function MovieHeader({img}) {
  const [like, setLike] = React.useState(false);

  const {goBack} = useNavigation();

  function _goBack() {
    goBack();
  }

  function _like() {
    setLike(!like);
  }

  return (
    <View style={s.container}>
      <ImageBackground
        style={s.backgroundImage}
        source={{uri: `${convertImage(img)}`}}>
        <View style={s.header}>
          <View style={s.wrapper}>
            <Btn onPress={_goBack}>
              <View style={s.icon}>
                <Icon name={'ios-arrow-back'} size={30} color={c.white} />
              </View>
            </Btn>
            <View style={s.filler} />
            <Btn onPress={_like}>
              <View style={s.icon}>
                <Icon
                  name={like ? 'md-heart' : 'md-heart-outline'}
                  size={30}
                  color={like ? c.red : c.white}
                />
              </View>
            </Btn>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
