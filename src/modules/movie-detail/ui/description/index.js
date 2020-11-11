import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import VideoIcon from 'shared/icons/movie-detail/video-4k';

import Text from 'shared/text';
import Button from 'shared/button/main';

import PropTypes from 'prop-types';

import c from 'theme/colors';
import s from './styles';

export default function Description({name, movieDescription, stars}) {
  return (
    <View style={s.container}>
      <View style={s.wrapper}>
        <Text color={c.white} size={25} type={'bold'}>
          {name}
        </Text>
        <View style={s.filler} />
        <VideoIcon width={20} height={20} style={{marginRight: 10}} />
      </View>

      <View style={[s.wrapper, {marginTop: 20}]}>
        <Button
          title={'WATCH NOW'}
          textSize={12}
          radius={30}
          mt={0}
          color={c.light_gray}
        />
        <View style={s.filler} />
        <View style={s.rating_container}>
          <View style={s.wrapper}>
            <View style={s.starIcon}>
              <Icon name={'md-star'} size={18} color={c.yellow} />
            </View>
            <View style={s.starIcon}>
              <Icon name="md-star" size={18} color={c.yellow} />
            </View>
            <View style={s.starIcon}>
              <Icon name="md-star" size={18} color={c.yellow} />
            </View>
            <View style={s.starIcon}>
              <Icon name="md-star" size={18} color={c.yellow} />
            </View>
            <View style={s.starIcon}>
              <Icon name="md-star" size={18} color={c.yellow} />
            </View>
          </View>
        </View>
      </View>

      <Text
        color={c.sub_titles}
        size={14}
        align={'left'}
        numberOfLines={6}
        mt={30}
        type={'light'}>
        {movieDescription}
      </Text>
    </View>
  );
}

Description.propTypes = {
  name: PropTypes.string.isRequired,
  movieDescription: PropTypes.string.isRequired.toString,
  stars: PropTypes.number,
};

Description.defaultProps = {
  name: '',
  movieDescription:
    'El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.',
  stars: 0,
};
