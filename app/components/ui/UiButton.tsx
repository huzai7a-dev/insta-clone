import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import COLORS from '../../constants/colors';

interface UiButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
  styleProp?: StyleProp<ViewStyle>;
}

const UiButton = ({
  onPress,
  title,
  color = COLORS.white,
  backgroundColor = COLORS.button,
  disabled = false,
  styleProp,
}: UiButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styleProp,
        styles.button,
        {backgroundColor},
        disabled && styles.disabledButton,
      ]}
      disabled={disabled}>
      <Text style={[styles.text, {color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Styles for the UiButton
const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: COLORS.buttonDisabled,
  },
});

export default UiButton;
