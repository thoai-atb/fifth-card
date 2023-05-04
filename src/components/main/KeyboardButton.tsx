import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  onPress?: () => void;
  children?: JSX.Element;
}

const KeyboardButton: React.FC<Props> = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
});

export default KeyboardButton;
