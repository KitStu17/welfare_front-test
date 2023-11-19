import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import userService from '../../service/UserService';

export const Logout = ({navigation, setToken}) => {
  return (
    <TouchableOpacity
      style={{marginTop: 10, marginBottom: 10}}
      onPress={() => userService.Logout(navigation, setToken)}>
      <Text style={{color: '#2196F3'}}>로그아웃 하기</Text>
    </TouchableOpacity>
  );
};
