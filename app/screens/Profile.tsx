import React from 'react';
import {StyleSheet, View} from 'react-native';

import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileAction from '../components/profile/ProfileActions';
import ProfileGrid from '../components/profile/ProfileGrid';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <ProfileAction />
      <ProfileGrid />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ProfileScreen;
