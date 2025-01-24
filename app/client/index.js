import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const clients = [
    { id: '1', name: 'John Doe', number: '123-456-7890', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', number: '987-654-3210', email: 'jane@example.com' },
    { id: '3', name: 'Alice Johnson', number: '555-123-4567', email: 'alice@example.com' },
];

export default function Client() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [filteredClients, setFilteredClients] = useState(clients);

    const handleSearch = (text) => {
        setSearch(text);
        if (text) {
            const filtered = clients.filter(client =>
                client.name.toLowerCase().includes(text.toLowerCase()) ||
                client.number.includes(text) ||
                client.email.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredClients(filtered);
            return
        }

        setFilteredClients(clients);

    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => router.push(`/client-details/${item.id}`)}
        >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.number}</Text>
            <Text>{item.email}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.filterContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search by name, number or email"
                    value={search}
                    onChangeText={handleSearch}
                />
            </View>
            <View style={styles.containerClients}>
                <FlatList
                    data={filteredClients}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    filterContainer: {
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    name: {
        fontWeight: 'bold',
    },
    containerClients: {
        flex: 1,
    },
});