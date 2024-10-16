import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Input({ addTask }) {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Tulis tugas baru..."
                value={task}
                onChangeText={setTask}
            />
            <Button title="Tambah" onPress={handleAddTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
    },
});
