import React from 'react';
import {Text} from 'react-native';
import COLORS from '../../constants/colors';

const textTypes = {
  heading: {
    size: 24,
    weight: 'bold',
    color: COLORS.primaryText,
  },
  subheading: {
    size: 18,
    weight: '600',
    color: COLORS.secondaryText,
  },
  body: {
    size: 14,
    weight: 'normal',
    color: COLORS.primaryText,
  },
  caption: {
    size: 12,
    weight: 'normal',
    color: COLORS.secondaryText,
  },
};

interface UiTextProps {
  type?: keyof typeof textTypes;
  style?: object;
  children: React.ReactNode;
}

const UiText = ({type = 'body', style, children}: UiTextProps) => {
  const {size, weight, color} = textTypes[type];
  return (
    <Text style={[{fontSize: size, fontWeight: weight, color}, style]}>
      {children}
    </Text>
  );
};

export default UiText;
