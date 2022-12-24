import React from 'react';
import {View, Text} from 'react-native';

import styles from './EmptyList';

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.secondText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};
