import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RecommendWelfareContents from '../components/RecommendComponents/RecommendWelfareContents';
import {styles} from '../styles/MainPageStyle';
import mainPageService from '../service/WelfareService';
import {ActivityIndicator, View, ImageBackground} from 'react-native';

const RecommendPage = ({navigation, token}) => {
  const [RecommendWelfareList, setRecommendWelfareList] = useState([]);
  const [bookmarkedWelfareList, setBookmarkedWelfareList] = useState([]);
  const [recommendLoding, setRecommendLoding] = useState(true);
  useFocusEffect(
    React.useCallback(() => {
      setRecommendLoding(true);
      if (!token) {
        navigation.navigate('Login');
      } else {
        mainPageService.getAllDataByUserInfo(token).then(data => {
          setRecommendWelfareList(data);
          setRecommendLoding(false);
        });
      }
    }, [navigation, token]),
  );

  return (
    <ImageBackground
      source={require('../assets/background/background.png')}
      style={styles.container}>
      <SafeAreaView>
        <View>
          {recommendLoding ? (
            <ActivityIndicator size="large" />
          ) : (
            <RecommendWelfareContents
              welfareList={RecommendWelfareList}
              bookmarkList={bookmarkedWelfareList}
              setBookmarkList={setBookmarkedWelfareList}
              token={token}
              navigation={navigation}
            />
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RecommendPage;
