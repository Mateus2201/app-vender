import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import Pluscircleo from '@expo/vector-icons/AntDesign';

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
            )
            setFilteredClients(filtered)
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

    return <SafeAreaView style={styles.container}>
            <View style={styles.filterContainer}>
                <TextInput
                    style={styles.inputContainer}
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
            <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/new-client')}>
                <Pluscircleo name="plus" size={40} color="#858EB5" />
            </TouchableOpacity>
        </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    filterContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        height: 40,

    },
    inputContainer: {
        height: 40,
        width: '100%',
        borderColor: '#858EB5',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 5,
    },
    iconContainer: {
        width: '9%',
        height: 60,
        width: 60,
        bottom: 30,
        right: 30,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#858EB5',
        borderWidth: 2,
        borderRadius: 50,
        marginRight: 5,
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