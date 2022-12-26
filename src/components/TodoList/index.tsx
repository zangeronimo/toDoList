import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Todo} from '../../screens/App';
import {DoneLabel} from '../DoneLabel';
import {PendingLabel} from '../PendingLabel';

import styles from './TodoList';

type Props = {
  todo?: Todo;
  togglePending: (todo: Todo) => void;
};

export const TodoList = ({todo = undefined, togglePending}: Props) => {
  if (!todo) {
    return <></>;
  }

  const handleTogglePending = () => {
    togglePending(todo);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.finishButton}
        onPress={handleTogglePending}>
        {todo.pending ? <PendingLabel /> : <DoneLabel />}
      </TouchableOpacity>
      <Text style={styles.contentText}>{todo.content}</Text>
      <View style={styles.removeButton}>
        <Text style={styles.removeButtonLabel}>-</Text>
      </View>
    </View>
  );
};
