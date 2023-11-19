import {TouchableOpacity, View, TextInput, Button, Text} from 'react-native';
import {
  styles,
  pickerSelectCity,
  pickerSelecFamily,
} from '../../styles/SignupStyle';
import {Cityname, family, cityRegion} from '../Common/CityRegionFamily';
import RNPickerSelect from 'react-native-picker-select';

export const SignupInput = ({
  city,
  setCity,
  setEmail,
  setUserName,
  setPassword,
  setRegion,
  setFamilySituation,
}) => {
  const handleCityChange = value => {
    setCity(value); // 선택된 도시 업데이트
    setRegion(''); // 선택된 지방 초기화
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.login}>회원가입</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          spellCheck
          placeholder={'이메일'}
          keyboardType="email-address"
          style={styles.IdInput}
          onChangeText={text => setEmail(text)}
        />
        <TouchableOpacity style={styles.doubleCheck}>
          <Button title="중복확인"></Button>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          placeholder={'비밀번호'}
          secureTextEntry
          style={styles.TextInput}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View>
        <TextInput
          placeholder={'이름'}
          style={styles.TextInput}
          onChangeText={text => setUserName(text)}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <RNPickerSelect
            style={pickerSelectCity}
            textInputProps={{underlineColorAndroid: 'transparent'}}
            fixAndroidTouchableBug={true} // 안드로이드 오류 해결
            useNativeAndroidPickerStyle={false} // 기본 안드로이드 스타일 제거
            onValueChange={handleCityChange}
            items={Cityname}
            placeholder={{
              label: '시도명',
            }}
          />
        </View>
        <View>
          <RNPickerSelect
            style={pickerSelectCity}
            textInputProps={{underlineColorAndroid: 'transparent'}}
            fixAndroidTouchableBug={true} // 안드로이드 오류 해결
            useNativeAndroidPickerStyle={false} // 기본 안드로이드 스타일 제거
            onValueChange={value => setRegion(value)}
            items={cityRegion[city]}
            placeholder={{
              label: '시군명',
            }}
          />
        </View>
      </View>
      <View>
        <RNPickerSelect
          style={pickerSelecFamily}
          textInputProps={{underlineColorAndroid: 'transparent'}}
          fixAndroidTouchableBug={true} // 안드로이드 오류 해결
          useNativeAndroidPickerStyle={false} // 기본 안드로이드 스타일 제거
          onValueChange={value => setFamilySituation(value)}
          items={family}
          placeholder={{
            label: '가구상황',
          }}
        />
      </View>
    </View>
  );
};
