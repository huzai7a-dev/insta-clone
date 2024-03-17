import React from 'react';
import FeedHeader from '../components/feed/FeedHeader';
import Stories from '../components/feed/Stories';
import {FlatList, ListRenderItem} from 'react-native';
import FeedItem, {FeedItemProps} from '../components/feed/FeedItem';

interface FeedDataItem extends FeedItemProps {
  id: number;
}

const userUri =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const postUri =
  'https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop.jpg';
const feedData: FeedDataItem[] = [
  {
    id: 1,
    userName: 'John Doe',
    userImageUri: userUri,
    postImageUri: postUri,
    likesCount: 150,
    caption: 'A beautiful day in the park! 🌳 #nature',
    timestamp: '3 hours ago',
  },
  {
    id: 2,
    userName: 'Jane Smith',
    userImageUri: userUri,
    postImageUri: postUri,
    likesCount: 230,
    caption: 'Love this new coffee place! ☕ #coffee',
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    userName: 'Jane Smith',
    userImageUri: userUri,
    postImageUri: postUri,
    likesCount: 230,
    caption: 'Love this new coffee place! ☕ #coffee',
    timestamp: '5 hours ago',
  },
  {
    id: 4,
    userName: 'Jane Smith',
    userImageUri: userUri,
    postImageUri: postUri,
    likesCount: 230,
    caption: 'Love this new coffee place! ☕ #coffee',
    timestamp: '5 hours ago',
  },
  {
    id: 5,
    userName: 'John Doe',
    userImageUri: userUri,
    postImageUri: postUri,
    likesCount: 150,
    caption: 'A beautiful day in the park! 🌳 #nature',
    timestamp: '3 hours ago',
  },
  {
    id: 6,
    userName: 'John Doe',
    userImageUri: userUri,
    postImageUri: postUri,
    likesCount: 150,
    caption: 'A beautiful day in the park! 🌳 #nature',
    timestamp: '3 hours ago',
  },
];

const renderItem: ListRenderItem<FeedDataItem> = ({item}) => (
  <FeedItem
    caption={item.caption}
    likesCount={item.likesCount}
    postImageUri={item.postImageUri}
    timestamp={item.timestamp}
    userImageUri={item.userImageUri}
    userName={item.userName}
  />
);
const FeedScreen = () => {
  return (
    <>
      <FeedHeader />
      <Stories />
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </>
  );
};

export default FeedScreen;
