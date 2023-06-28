import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <PaperProvider>
      <Text style={styles.text}>Halo</Text>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    text: {
      backgroundColor: 'red'
    },
  })