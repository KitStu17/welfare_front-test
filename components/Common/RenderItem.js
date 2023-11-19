import {
  Button,
  Linking,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../styles/MainPageStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark as fullFaBookmark} from '@fortawesome/free-solid-svg-icons';
import {faBookmark as emptyFaBookmark} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import bookmarkService from '../../service/BookmarkService';

const RenderItem = ({
  welfare,
  bookmarkList,
  setBookmarkList,
  token,
  navigation,
}) => {
  const detailButtonPress = url => {
    Linking.openURL(url);
    // const supported = await Linking.canOpenURL(url);
    // if (supported) {
    //   await Linking.openURL(url);
    // } else {
    //   Alert.alert(`Don't know how to open this URL: ${url}`);
    // }
  };

  const fullBookmarkPress = welfareId => {
    const findBookmark = bookmarkList.find(
      bookmark => bookmark.welfare.servId === welfareId,
    );
    console.log(findBookmark);
    bookmarkService.deleteBookmark(token, findBookmark.id).then(() => {
      setBookmarkList(
        bookmarkList.filter(bookmark => {
          return bookmark !== findBookmark;
        }),
      );
    });
  };

  const emptyBookmarkPress = welfareId => {
    if (token) {
      bookmarkService.registerBookmark(token, welfareId).then(newBookmark => {
        setBookmarkList([...bookmarkList, newBookmark]);
      });
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.welFare}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.TextTitle} numberOfLines={2}>
          {welfare.servNm}
        </Text>
      </View>
      <Text style={styles.TextContents} numberOfLines={3}>
        {welfare.servDgst}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            detailButtonPress(welfare.servDtlLink);
          }}>
          <Text style={{color: '#2196F3', fontSize: 13, fontWeight: 'bold'}}>
            자세히 보기
          </Text>
        </TouchableOpacity>
        {bookmarkList.some(
          bookmark => bookmark.welfare.servId === welfare.servId,
        ) ? (
          <Pressable
            onPress={() => {
              fullBookmarkPress(welfare.servId);
            }}>
            <FontAwesomeIcon icon={fullFaBookmark} size={30} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              emptyBookmarkPress(welfare.servId);
            }}>
            <FontAwesomeIcon icon={emptyFaBookmark} size={30} />
          </Pressable>
        )}
      </View>
    </View>
  );
};
export default RenderItem;
