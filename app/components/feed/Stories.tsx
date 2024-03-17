import React from 'react';
import {ScrollView} from 'react-native';
import StoryCircle from '../shared/StoryCircle';

const uri =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Stories = () => {
  return (
    <ScrollView style={{marginTop: 10}} horizontal={true}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
        <StoryCircle
          key={i}
          isNewStory={i === 0 || i === 1 || i === 2}
          imageUri={uri}
          userName="John Doe"
        />
      ))}
    </ScrollView>
  );
};

export default Stories;
