import {Text, TouchableWithoutFeedback} from 'react-native';

export const AlreadyUser = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
      <Text
        style={{fontSize: 12, color: '#2196F3', fontFamily: 'The_Jamsil_3'}}>
        이미 계정이 있으신가요?
      </Text>
    </TouchableWithoutFeedback>
  );
};
