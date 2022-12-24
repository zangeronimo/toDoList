import React from 'react';
import {View, Text} from 'react-native';
import {Todo} from '../../screens/App';

import styles from './TodoList';

type Props = {
  todo?: Todo;
};

export const TodoList = ({todo = undefined}: Props) => {
  if (!todo) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.finishButton}>
        <Text style={styles.finishButtonLabel} />
      </View>
      <Text style={styles.contentText}>{todo.content}</Text>
      <View style={styles.removeButton}>
        <Text>-</Text>
      </View>
    </View>
  );
};
