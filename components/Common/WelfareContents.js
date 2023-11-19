import React from 'react';
import {FlatList} from 'react-native';
import RenderItem from './RenderItem';

const WelfareContents = ({
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
        <RenderItem
          welfare={item}
          bookmarkList={bookmarkList}
          setBookmarkList={setBookmarkList}
          token={token}
          navigation={navigation}
        />
      )}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
    />
  );
};

export default WelfareContents;
