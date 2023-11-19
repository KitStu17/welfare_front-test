import {
  Button,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../styles/LoginPageStyle';
import userService from '../../service/UserService';

export const LoginInput = ({
  navigation,
  id,
  password,
  setId,
  setPassword,
  token,
  setToken,
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.login}>로그인</Text>
        </View>
        <View>
          <TextInput
            spellCheck
            placeholder={'아이디'}
            keyboardType="email-address"
            style={styles.TextInput}
            onChangeText={text => setId(text)}
          />
          <TextInput
            placeholder={'비밀번호'}
            secureTextEntry
            style={styles.TextInput}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => {
              userService.login(id, password).then(data => {
                setToken(data);
                navigation.navigate('Recommend');
              });
            }}
            title="로그인 하기"
          />
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              fontSize: 12,
              color: '#007AFF',
              fontFamily: 'The_Jamsil_3',
            }}>
            계정이 없으신가요? 여기서 가입하세요!
          </Text>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
