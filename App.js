import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ToDoItem from './components/ToDoItem';
import Input from './components/Input';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, {
      id: Date.now().toString(),
      text: task,
      isCompleted: true  // Status default: belum selesai
    }]);

  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ToDoItem
            task={item}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Input addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
