import React from 'react';
import {View, StyleSheet} from 'react-native';

const HorizontalBar: React.FC = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'gray', // set the color of the line
    borderBottomWidth: 1, // set the thickness of the line
    marginVertical: 10, // set the vertical margin of the line
    opacity: 0.2,
  },
});

export default HorizontalBar;
