import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({
  children,
  marginVertical,
}: {
  children?: ReactNode;
  marginVertical?: number;
}) => {
  return <View style={[styles.spacer, { marginVertical }]}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default Spacer;
