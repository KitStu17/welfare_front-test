import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import {styles} from '../styles/EditUserStyle';
import {PasswordEdit} from '../components/EditUserComponents/PasswordEdit';
import {FamilyEdit} from '../components/EditUserComponents/FamilyEdit';
import {CityEdit} from '../components/EditUserComponents/CityEdit';
import {Logout} from '../components/EditUserComponents/Logout';
import userService from '../service/UserService';
import {Header} from '../components/Common/Header';

const EditUserPage = ({navigation, token, setToken}) => {
  const [user, setUser] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [NewFamilySituation, setNewFamilySituation] = useState('');
  const [NewCity, setNewCity] = useState('서울특별시');
  const [NewRegion, setNewRegion] = useState('');

  useEffect(() => {
    userService.getUserInfo(token).then(userInfo => {
      setUser(userInfo);
    });
  }, []);

  return (
    <ImageBackground
      source={require('../assets/background/background.png')}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <PasswordEdit
            token={token}
            NewPassword={NewPassword}
            setNewPassword={setNewPassword}
          />
          <FamilyEdit
            user={user}
            NewFamilySituation={NewFamilySituation}
            setNewFamilySituation={setNewFamilySituation}
            token={token}
          />
          <CityEdit
            user={user}
            NewCity={NewCity}
            NewRegion={NewRegion}
            setNewCity={setNewCity}
            setNewRegion={setNewRegion}
            token={token}
          />
          <Logout navigation={navigation} setToken={setToken} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default EditUserPage;
