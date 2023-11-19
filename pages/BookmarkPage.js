import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import userService from '../service/UserService';
import {
  Button,
  FlatList,
  ImageBackground,
  SafeAreaView,
  View,
} from 'react-native';
import {styles} from '../styles/MainPageStyle';
import WelfareContents from '../components/Common/WelfareContents';

const BookmarkPage = ({navigation, token}) => {
  const [welfareList, setWelfareList] = useState([]);
  const [bookmarkList, setBookmarkList] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      if (token) {
        userService.getUserInfo(token).then(user => {
          setBookmarkList(user.bookmarks);
          setWelfareList(user.bookmarks.map(bookmark => bookmark.welfare));
        });
      } else {
        navigation.navigate('Login');
      }
    }, [navigation, token]),
  );

  return (
    <ImageBackground
      source={require('../assets/background/background.png')}
      style={styles.container}>
      <SafeAreaView>
        <WelfareContents
          welfareList={welfareList}
          bookmarkList={bookmarkList}
          setWelfareList={setWelfareList}
          setBookmarkList={setBookmarkList}
          token={token}
          navigation={navigation}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default BookmarkPage;
