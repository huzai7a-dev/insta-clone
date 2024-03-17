/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import UiButton from '../ui/UiButton';
import {StyleSheet, View} from 'react-native';
import COLORS from '../../constants/colors';

const ProfileAction = () => {
  return (
    <View style={styles.container}>
      <UiButton
        backgroundColor={COLORS.white}
        color={COLORS.button}
        styleProp={{
          flex: 1,
          height: 40,
          backgroundColor: COLORS.white,
          borderColor: COLORS.button,
          borderWidth: 1,
        }}
        onPress={() => console.log('follow')}
        title="Follow"
      />
      <UiButton
        backgroundColor={COLORS.white}
        color={COLORS.button}
        styleProp={{
          flex: 1,
          height: 40,
          backgroundColor: COLORS.white,
          borderColor: COLORS.button,
          borderWidth: 1,
        }}
        onPress={() => console.log('share')}
        title="Share Profile"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLORS.white,
  },
});
export default ProfileAction;
