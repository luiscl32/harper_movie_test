import React from 'react';
import {View} from 'react-native';
import SearchBar from 'shared/search-bar';
import Text from 'shared/text';

import {useDispatch} from 'react-redux';
import {searchMovie} from 'redux_config/actions/search';

import c from 'theme/colors';
import s from './styles';

export default function Search() {
  const dispatch = useDispatch();

  const [movieName, setMovieName] = React.useState('');

  React.useEffect(() => {
    dispatch(searchMovie({movieName}));
  }, [movieName]);

  return (
    <View style={s.container}>
      <Text
        color={c.white}
        size={30}
        align={'left'}
        type={'bold'}
        mb={15}
        letterSpacing={1.59}>
        {`Hello,what do you\nwant to watch?`}
      </Text>

      <View style={s.search_container}>
        <SearchBar
          value={movieName}
          onChangeText={(val) => setMovieName(val)}
        />
      </View>
    </View>
  );
}
