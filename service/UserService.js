import {Alert} from 'react-native';
import axios from 'axios';
import {BACKEND_URL} from '../global';
import AsyncStorage from '@react-native-async-storage/async-storage';

class UserService {
  login = async (id, password) => {
    try {
      const user = {
        email: id,
        password: password,
      };

      const response = await axios.post(`${BACKEND_URL}/auth/signin`, user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // 일반 웹 브라우저의 local storage역할
      // 앱 실행 시마다 로그인이 하지 않도록 하기위해 사용
      await AsyncStorage.setItem('ACCESS_TOKEN', response.data);

      return response.data;
    } catch (error) {
      console.log(error);

      if (error.response) {
        Alert.alert('로그인 실패', '아이디 또는 비밀번호를 확인해주세요');
      } else if (error.request) {
        Alert.alert('로그인 실패', '네트워크 연결을 확인해주세요');
      } else {
        Alert.alert('로그인 실패', '알 수 없는 오류가 발생했습니다');
      }
    }
  };

  Signup = (
    email,
    password,
    username,
    birth,
    city,
    region,
    familySituation,
    navigation,
  ) => {
    const userData = {
      email: email,
      password: password,
      username: username,
      birth: birth,
      ctpvNm: city,
      sggNm: region,
      familySituation: familySituation,
    };
    axios
      .post(`${BACKEND_URL}/auth/signup`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        Alert.alert('회원가입 완료되었습니다');
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(err);
      });
  };
  getUserInfo = async token => {
    try {
      const response = await axios.get(`${BACKEND_URL}/auth/getUser`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  passwordChange = async (NewPassword, token) => {
    try {
      const newPassword = {
        password: NewPassword,
      };

      const response = await axios.put(
        `${BACKEND_URL}/auth/updatePassword`,
        newPassword,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        },
      );

      console.log(response);
      Alert.alert('변경 완료 되었습니다!');
    } catch (error) {
      console.log(error);
      Alert.alert('비밀번호 변경에 실패했습니다.');
    }
  };
  familySituationChange = async (user, NewFamilySituation, token) => {
    try {
      const newFamilySituation = {
        ctpvNm: user.ctpvNm,
        sggNm: user.sggNm,
        familySituation: NewFamilySituation,
      };

      const response = await axios.put(
        `${BACKEND_URL}/auth/updateUser`,
        newFamilySituation,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        },
      );

      console.log(response);
      Alert.alert('변경 완료 되었습니다!');
    } catch (error) {
      console.log(error);
      Alert.alert('가구상황변경에 실패했습니다.');
    }
  };

  regionChange = async (user, NewCity, NewRegion, token) => {
    try {
      const newRegion = {
        ctpvNm: NewCity,
        sggNm: NewRegion,
        familySituation: user.familySituation,
      };

      const response = await axios.put(
        `${BACKEND_URL}/auth/updateUser`,
        newRegion,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        },
      );

      console.log(response);
      Alert.alert('변경 완료 되었습니다!');
    } catch (error) {
      console.log(error);
      Alert.alert('지역 변경에 실패했습니다.');
    }
  };

  Logout = async (navigation, setToken) => {
    setToken(null);
    AsyncStorage.removeItem('ACCESS_TOKEN');
    navigation.navigate('Home');
    Alert.alert('로그아웃 되었습니다.');
  };
}

const userService = new UserService();

export default userService;
