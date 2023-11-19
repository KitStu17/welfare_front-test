import {styles, pickerSelectFamily} from '../../styles/EditUserStyle';
import {Text, TouchableOpacity, View} from 'react-native';
import {family} from '../Common/CityRegionFamily';
import RNPickerSelect from 'react-native-picker-select';
import userService from '../../service/UserService';
import React from 'react';

export const FamilyEdit = ({
  token,
  user,
  NewFamilySituation,
  setNewFamilySituation,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <RNPickerSelect
        style={pickerSelectFamily}
        textInputProps={{underlineColorAndroid: 'transparent'}}
        fixAndroidTouchableBug={true}
        useNativeAndroidPickerStyle={false}
        onValueChange={value => setNewFamilySituation(value)}
        placeholder={{
          label: '가구상황',
        }}
        items={family}
      />
      <TouchableOpacity
        onPress={() => {
          userService.familySituationChange(user, NewFamilySituation, token);
        }}
        style={styles.EditButton}>
        <Text style={{color: 'white'}}>수정</Text>
      </TouchableOpacity>
    </View>
  );
};
