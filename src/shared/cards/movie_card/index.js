import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Btn from 'shared/button/Btn';
import Text from 'shared/text';

import PropTypes from 'prop-types';

import c from 'theme/colors';
import s from './styles';
import {useNavigation} from '@react-navigation/native';

export default function MovieCard({item}) {
  const {navigate} = useNavigation();

  function _goToMovieDetail() {
    navigate('movie/detail', {item});
  }

  return (
    <View style={s.btn_container}>
      <Btn onPress={_goToMovieDetail}>
        <View style={s.container}>
          <View style={s.img_container}>
            <Image
              style={s.img}
              source={{
                uri: `${item?.imgurl}`,
              }}
            />
          </View>
          <Text align={'left'} size={16} color={c.white} mb={10}>
            {item?.name}
          </Text>

          <View style={s.star_container}>
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
