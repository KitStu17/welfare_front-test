import React from 'react';
import {TextInput, View} from 'react-native';

export const SearchBar = ({setKeyword}) => {
  return (
    <View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          backgroundColor: 'white',
          width: '95%',
          borderRadius: 10,
          margin: 10,
          fontFamily: 'The_Jamsil_3',
          padding: 10,
        }}
        placeholder="제목으로 검색하세요"
        returnKeyType="search"
        onChangeText={text => setKeyword(text)}
      />
    </View>
  );
};
