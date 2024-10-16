import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ToDoItem({ task, toggleTaskStatus, deleteTask }) {
    return (
        <View style={styles.taskItem}>
            <Text style={{ textDecorationLine: task.isCompleted ? 'line-through' : 'none' }}>
                {task.text}
            </Text>
            <Button title={task.isCompleted ? "Belum Selesai" : "Selesai"} onPress={() => toggleTaskStatus(task.id)} />
            <Button title="Hapus" onPress={() => deleteTask(task.id)} />
        </View>
    );
}

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
