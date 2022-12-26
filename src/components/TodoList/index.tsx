import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Todo} from '../../screens/App';
import {DoneLabel} from '../DoneLabel';
import {PendingLabel} from '../PendingLabel';

import styles from './TodoList';

type Props = {
  todo?: Todo;
  togglePending: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
};

export const TodoList = ({
  todo = undefined,
  togglePending,
  removeTodo,
}: Props) => {
  if (!todo) {
    return <></>;
  }

  const handleTogglePending = () => {
    togglePending(todo);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.finishButton}
        onPress={handleTogglePending}>
        {todo.pending ? <PendingLabel /> : <DoneLabel />}
      </TouchableOpacity>
      <Text style={styles.contentText}>{todo.content}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={handleRemoveTodo}>
        <Text style={styles.removeButtonLabel}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
