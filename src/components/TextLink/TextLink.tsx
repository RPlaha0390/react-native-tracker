import React from 'react';
import {
  TouchableOpacity,
  StyleProp,
  TextStyle,
  StyleSheet
} from 'react-native';
import { Text } from 'react-native-paper';

const TextLink = ({
  onPress,
  children,
  style
}: {
  onPress: () => void;
  children: React.ReactNode;
  style: StyleProp<TextStyle>;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
});

export default TextLink;
