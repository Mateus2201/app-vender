import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function NewClient() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [option, setOption] = useState('');

    const handleSubmit = () => {
        // Handle form submission
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('Option:', option);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter name"
            />
            <Text style={styles.label}>Address:</Text>
            <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder="Enter address"
            />
            <Text style={styles.label}>Option:</Text>
            <TextInput
                style={styles.input}
                value={option}
                onChangeText={setOption}
                placeholder="Enter option"
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});
