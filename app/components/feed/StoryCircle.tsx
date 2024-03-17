import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import COLORS from '../../constants/colors';

interface StoryProps {
  imageUri: string;
  isNewStory: boolean;
  userName: string;
}
const StoryCircle = ({imageUri, isNewStory, userName}: StoryProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.story, isNewStory ? styles.newStory : null]}>
        <Image source={{uri: imageUri}} style={styles.image} />
      </View>
      <Text style={styles.userName}>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 4,
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  newStory: {
    borderColor: COLORS.button,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  userName: {
    marginTop: 4,
    fontSize: 12,
  },
});

export default StoryCircle;
