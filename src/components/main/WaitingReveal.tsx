import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  onReveal: () => void;
}

const WaitingReveal: React.FC<Props> = ({onReveal}) => {
  useEffect(() => {
    console.log('set timeout');
    setTimeout(() => {
      console.log('on reveal');
      onReveal();
    }, 2000);
  }, [onReveal]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculating your card...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
});

export default WaitingReveal;
