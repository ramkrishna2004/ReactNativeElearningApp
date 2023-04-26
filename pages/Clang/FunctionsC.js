import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const data = [
  { id: '0', videoId: 'obJcPlAtGVM' },
  { id: '1', videoId: 'obJcPlAtGVM' },
  { id: '2', videoId: 'obJcPlAtGVM' },
];
const FunctionsC = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
          renderItem={({ item }) => (
          <YoutubePlayer
          videoId={item.videoId}
          play={true}
          onChangeState={e => console.log(e)}
          onReady={e => console.log(e)}
          onError={e => console.log(e)}
          style={{  height: 300 }}
        />
        )}
      />

    </View>
  );
};

export default FunctionsC;
