import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../../styles/EditUserStyle';
import userService from '../../service/UserService';

export const PasswordEdit = ({NewPassword, setNewPassword, token}) => {
  return (
    <View>
      <View>
        <Text style={styles.login}>개인정보 수정</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          spellCheck
          placeholder={'비밀번호'}
          style={styles.IdInput}
          onChangeText={text => setNewPassword(text)}
        />
        <TouchableOpacity
          onPress={() => {
            userService.passwordChange(NewPassword, token);
          }}
          style={styles.EditButton}>
          <Text style={{color: 'white'}}>수정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
