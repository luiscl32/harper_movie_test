import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MovieCardLoader from 'shared/loaders/movie-card';
import Btn from 'shared/button/Btn';
import Text from 'shared/text';

import PropTypes from 'prop-types';

import c from 'theme/colors';
import s from './styles';
import {useNavigation} from '@react-navigation/native';
import {calculateStars, convertImage} from 'utils/helpers';
import {useSelector} from 'react-redux';
import {app_theme} from 'redux_config/selectors';

export default function MovieCard({item}) {
  const {navigate} = useNavigation();

  const theme = useSelector((state) => {
    return app_theme(state);
  });

  function _goToMovieDetail() {
    navigate('movie/detail', {movieId: item?.id});
  }

  const qualify = Math.round(item?.vote_average);

  const stars = calculateStars(qualify);

  if (item.loading) {
    return <MovieCardLoader />;
  }

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
            <Text align={'left'} size={14} color={theme ? c.white : c.primary}>
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
