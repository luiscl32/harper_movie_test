import React from 'react';
import {View, Image} from 'react-native';

import PropTypes from 'prop-types';

import c from 'theme/colors';
import s from './styles';
import Text from 'shared/text';

export default function Actors({actorsData}) {
  const ActorCard = ({item}) => {
    return (
      <View style={s.actor_container}>
        <View style={s.actor_photo}>
          <Image style={s.photo} source={{uri: `${item?.img}`}} />
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
      <View style={s.wrapper}>
        <ActorCard
          item={{
            name: 'jason momoa',
            img:
              'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abcd79e7-0267-4ae1-8a3b-1709339f8d75/dahrmn1-af964d26-8259-4381-b226-c773d7f2191c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWJjZDc5ZTctMDI2Ny00YWUxLThhM2ItMTcwOTMzOWY4ZDc1XC9kYWhybW4xLWFmOTY0ZDI2LTgyNTktNDM4MS1iMjI2LWM3NzNkN2YyMTkxYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.wouWlShYP99J36395iSiy7KdGa91RPNOToXjHs8kE7o',
          }}
        />
        <ActorCard
          item={{
            name: 'jason momoa',
            img:
              'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abcd79e7-0267-4ae1-8a3b-1709339f8d75/dahrmn1-af964d26-8259-4381-b226-c773d7f2191c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWJjZDc5ZTctMDI2Ny00YWUxLThhM2ItMTcwOTMzOWY4ZDc1XC9kYWhybW4xLWFmOTY0ZDI2LTgyNTktNDM4MS1iMjI2LWM3NzNkN2YyMTkxYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.wouWlShYP99J36395iSiy7KdGa91RPNOToXjHs8kE7o',
          }}
        />
        <ActorCard
          item={{
            name: 'jason momoa',
            img:
              'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abcd79e7-0267-4ae1-8a3b-1709339f8d75/dahrmn1-af964d26-8259-4381-b226-c773d7f2191c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWJjZDc5ZTctMDI2Ny00YWUxLThhM2ItMTcwOTMzOWY4ZDc1XC9kYWhybW4xLWFmOTY0ZDI2LTgyNTktNDM4MS1iMjI2LWM3NzNkN2YyMTkxYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.wouWlShYP99J36395iSiy7KdGa91RPNOToXjHs8kE7o',
          }}
        />
        <ActorCard
          item={{
            name: 'jason momoa',
            img:
              'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abcd79e7-0267-4ae1-8a3b-1709339f8d75/dahrmn1-af964d26-8259-4381-b226-c773d7f2191c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWJjZDc5ZTctMDI2Ny00YWUxLThhM2ItMTcwOTMzOWY4ZDc1XC9kYWhybW4xLWFmOTY0ZDI2LTgyNTktNDM4MS1iMjI2LWM3NzNkN2YyMTkxYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.wouWlShYP99J36395iSiy7KdGa91RPNOToXjHs8kE7o',
          }}
        />
      </View>
    </View>
  );
}

Actors.propTypes = {
  actorsData: PropTypes.array.isRequired,
};

Actors.defaultProps = {
  actorsData: [],
};
