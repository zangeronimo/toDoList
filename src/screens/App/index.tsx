import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {EmptyList} from '../../components/EmptyList';
import {Header} from '../../components/Header';
import {TodoList} from '../../components/TodoList';

import styles from './App';

export type Todo = {
  id: string;
  content: string;
  pending: boolean;
};

const App = () => {
  const [state, setState] = useState({
    todos: [] as Todo[],
    todo: 'test',
  });

  const handleAddNewTodo = () => {
    const todo = {
      id: (state.todos?.length + 1).toString(),
      content: state.todo,
      pending: true,
    } as Todo;

    setState(old => ({...old, todos: [...old.todos, todo]}));
  };

  const togglePending = (todo: Todo) => {
    setState(old => ({
      ...old,
      todos: old.todos.map(item => {
        if (item.id === todo.id) {
          item.pending = !item.pending;
        }

        return item;
      }),
    }));
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.create}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={state.todo}
          onChangeText={value => setState(old => ({...old, todo: value}))}
        />
        <TouchableOpacity
          style={styles.button}
          disabled={!state.todo}
          onPress={handleAddNewTodo}>
          <Text style={styles.buttonAdd}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.totalizers}>
        <View style={styles.totalizer}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.totalizerValue}>{state.todos.length}</Text>
        </View>
        <View style={styles.totalizer}>
          <Text style={styles.finished}>Concluídas</Text>
          <Text style={styles.totalizerValue}>
            {state.todos.filter(item => item.pending === false).length}
          </Text>
        </View>
      </View>

      <FlatList
        data={state.todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoList todo={item} togglePending={togglePending} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
};

export default App;
