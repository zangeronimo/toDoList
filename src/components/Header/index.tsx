import React from 'react';
import {Text, View} from 'react-native';

import styles from './Header';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        🚀 to<Text style={styles.logo}>do</Text>
      </Text>
    </View>
  );
};
