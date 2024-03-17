import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Define the props interface
interface FeedItemProps {
  userName: string;
  userImageUri: string;
  postImageUri: string;
  likesCount: number;
  caption: string;
  timestamp: string; // Consider the format you'll be using, e.g., "3 hours ago"
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
      {/* User Info */}
      <View style={styles.userInfoSection}>
        <Image source={{uri: userImageUri}} style={styles.userImage} />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      {/* Post Image */}
      <Image source={{uri: postImageUri}} style={styles.postImage} />

      {/* Interactions */}
      <View style={styles.interactionsSection}>
        <TouchableOpacity>
          <Text style={styles.interactionIcon}>♥</Text>{' '}
          {/* Replace with heart icon */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.interactionIcon}>💬</Text>{' '}
          {/* Replace with comment icon */}
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <Text style={styles.likes}>{likesCount} likes</Text>

      {/* Caption */}
      <Text style={styles.caption}>{caption}</Text>

      {/* Timestamp */}
      <Text style={styles.timestamp}>{timestamp}</Text>
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
    height: 400, // Adjust based on your needs
  },
  interactionsSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  interactionIcon: {
    marginRight: 15,
    fontSize: 24,
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
