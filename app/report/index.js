import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const clients = [
    { id: '1', name: 'John Doe', number: '123-456-7890', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', number: '987-654-3210', email: 'jane@example.com' },
    { id: '3', name: 'Alice Johnson', number: '555-123-4567', email: 'alice@example.com' },
];

export default function Report() {
    const router = useRouter();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => router.push(`/ClientDetails/${item.id}`)}
        >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.number}</Text>
            <Text>{item.email}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList data={clients} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    name: {
        fontWeight: 'bold',
    },
});