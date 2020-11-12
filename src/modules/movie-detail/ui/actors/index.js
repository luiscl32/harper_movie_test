import React from 'react';
import {View, Image} from 'react-native';
import Text from 'shared/text';

import PropTypes from 'prop-types';

import {useDispatch, useSelector} from 'react-redux';
import {movie_actors} from 'redux_config/selectors';
import {fetchMovieActors} from 'redux_config/actions/movies';

import c from 'theme/colors';
import s from './styles';
import {convertImage} from 'utils/helpers';

export default function Actors({movieId}) {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log(state.movie_actors);
    return movie_actors(state);
  });

  React.useEffect(() => {
    dispatch(fetchMovieActors({movieId: movieId}));
  }, [movieId]);

  const fourActors = data.slice(0, 4);

  const ActorCard = ({item}) => {
    return (
      <View style={s.actor_container}>
        <View style={s.actor_photo}>
          <Image
            style={s.photo}
            source={{uri: `${convertImage(item?.profile_path)}`}}
          />
        </View>
        <Text
          mt={10}
          lineHeight={1}
          size={12}
          type={'light'}
          color={c.white}
          align={'center'}>
          {item?.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={s.container}>
      <View style={[s.wrapper, {flexWrap: 'wrap'}]}>
        {fourActors?.map((item, i) => (
          <ActorCard key={i} item={item} />
        ))}
      </View>
    </View>
  );
}

Actors.propTypes = {
  movieId: PropTypes.number.isRequired,
};

Actors.defaultProps = {
  movieId: 0,
};
