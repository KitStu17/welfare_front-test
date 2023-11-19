import React, {useEffect, useState} from 'react';
import {LoginInput} from '../components/LoginPageComponents/LoginInput';
import {Header} from '../components/Common/Header';
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import {styles} from '../styles/EditUserStyle';

const Login = ({navigation, token, setToken}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../assets/background/background.png')}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <LoginInput
            id={id}
            password={password}
            token={token}
            setToken={setToken}
            setId={setId}
            setPassword={setPassword}
            navigation={navigation}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default Login;
