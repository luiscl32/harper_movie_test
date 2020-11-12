import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Btn from 'shared/button/Btn';
import Text from 'shared/text';

import PropTypes from 'prop-types';

import c from 'theme/colors';
import s from './styles';
import {useNavigation} from '@react-navigation/native';
import {calculateStars, convertImage} from 'utils/helpers';

export default function MovieCard({item}) {
  const {navigate} = useNavigation();

  function _goToMovieDetail() {
    navigate('movie/detail', {item});
  }

  const qualify = Math.round(item?.vote_average);

  const stars = calculateStars(qualify);

  return (
    <View style={s.btn_container}>
      <Btn onPress={_goToMovieDetail}>
        <View style={s.container}>
          <View style={s.img_container}>
            <Image
              style={s.img}
              source={{
                uri: `${convertImage(item?.poster_path)}`,
              }}
            />
          </View>
          <View style={s.text_container}>
            <Text align={'left'} size={14} color={c.white}>
              {item?.original_title}
            </Text>
          </View>

          <View style={s.star_container}>
            <View style={s.wrapper}>
              {stars.map((item, i) => (
                <View key={i} style={s.starIcon}>
                  <Icon
                    name={'md-star'}
                    size={18}
                    color={item ? c.yellow : c.yellow_opacity}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </Btn>
    </View>
  );
}

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
};

MovieCard.defaultProps = {
  item: {name: '', imgurl: '', stars: 0},
};
