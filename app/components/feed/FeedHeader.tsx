import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const FeedHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 100, height: 30}}
        source={require('../../assets/insta_text_logo.png')}
      />
      <View style={styles.actions}>
        <AntIcon name="hearto" size={25} color="#000" />
        <MaterialIcon name="facebook-messenger" color={'#000'} size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 4,
  },
});
export default FeedHeader;
