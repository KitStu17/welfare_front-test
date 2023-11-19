import {Button, TouchableOpacity} from 'react-native';
import userService from '../../service/UserService';

export const UserInfoSubmit = ({
  email,
  password,
  username,
  birth,
  city,
  region,
  familySituation,
  navigation,
}) => {
  return (
    <TouchableOpacity style={{marginTop: 20, marginBottom: 20}}>
      <Button
        title="회원가입"
        onPress={() => {
          userService.Signup(
            email,
            password,
            username,
            birth,
            city,
            region,
            familySituation,
            navigation,
          );
        }}
      />
    </TouchableOpacity>
  );
};
