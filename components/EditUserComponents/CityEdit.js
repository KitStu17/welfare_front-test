import {Cityname, cityRegion} from '../Common/CityRegionFamily';
import {pickerSelectCity} from '../../styles/EditUserStyle';
import {Button, TouchableOpacity, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import userService from '../../service/UserService';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';

export const CityEdit = ({
  user,
  NewCity,
  NewRegion,
  setNewCity,
  setNewRegion,
  token,
}) => {
  const handleCityChange = value => {
    setNewCity(value);
    setNewRegion('');
  };
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <RNPickerSelect
            style={pickerSelectCity}
            textInputProps={{underlineColorAndroid: 'transparent'}}
            fixAndroidTouchableBug={true} // 안드로이드 오류 해결
            useNativeAndroidPickerStyle={false} // 기본 안드로이드 스타일 제거
            onValueChange={handleCityChange}
            placeholder={{
              label: '시도명',
            }}
            items={Cityname}
          />
        </View>
        <View>
          <RNPickerSelect
            style={pickerSelectCity}
            textInputProps={{underlineColorAndroid: 'transparent'}}
            fixAndroidTouchableBug={true} // 안드로이드 오류 해결
            useNativeAndroidPickerStyle={false} // 기본 안드로이드 스타일 제거
            onValueChange={value => setNewRegion(value)}
            placeholder={{
              label: '시군명',
            }}
            items={cityRegion[NewCity]}
          />
        </View>
      </View>
      <TouchableOpacity style={{marginTop: 10, marginBottom: 10}}>
        <Button
          title="거주지역 수정"
          onPress={() => {
            userService.regionChange(user, NewCity, NewRegion, token);
          }}></Button>
      </TouchableOpacity>
    </View>
  );
};
