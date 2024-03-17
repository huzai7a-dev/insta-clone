import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import UiText from '../ui/UiText';

export interface FeedItemProps {
  userName: string;
  userImageUri: string;
  postImageUri: string;
  likesCount: number;
  caption: string;
  timestamp: string;
}

const FeedItem: React.FC<FeedItemProps> = ({
  userName,
  userImageUri,
  postImageUri,
  likesCount,
  caption,
  timestamp,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <Image source={{uri: userImageUri}} style={styles.userImage} />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image source={{uri: postImageUri}} style={styles.postImage} />

      <View style={styles.interactionsSection}>
        <TouchableOpacity>
          <AntIcon
            style={styles.interactionIcon}
            name="hearto"
            size={25}
            color="#000"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesomeIcon
            style={styles.interactionIcon}
            name="comment-o"
            size={25}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <UiText style={styles.likes}>{likesCount} likes</UiText>

      <UiText style={styles.caption}>{caption}</UiText>

      <UiText style={styles.timestamp}>{timestamp}</UiText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  userInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  interactionsSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  interactionIcon: {
    marginRight: 20,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  caption: {
    marginLeft: 10,
    marginBottom: 5,
  },
  timestamp: {
    color: '#8e8e8e',
    marginLeft: 10,
  },
});

export default FeedItem;
