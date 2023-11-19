import React from 'react';
import {FlatList} from 'react-native';
import RecommendRenderItem from './RecommendRenderItem';

const RecommendWelfareContents = ({
  welfareList,
  bookmarkList,
  setBookmarkList,
  token,
  navigation,
}) => {
  return (
    <FlatList
      data={welfareList}
      renderItem={({item}) => (
        <RecommendRenderItem
          welfare={item}
          bookmarkList={bookmarkList}
          setBookmarkList={setBookmarkList}
          token={token}
          navigation={navigation}
        />
      )}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      contentContainerStyle={{padding: 10}}
    />
  );
};

export default RecommendWelfareContents;
