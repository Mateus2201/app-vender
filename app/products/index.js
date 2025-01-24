import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

const products = [
    { id: '1', name: 'Product A', price: '$10.00', description: 'Description of Product A' },
    { id: '2', name: 'Product B', price: '$20.00', description: 'Description of Product B' },
    { id: '3', name: 'Product C', price: '$30.00', description: 'Description of Product C' },
    { id: '4', name: 'Product D', price: '$40.00', description: 'Description of Product D' },
    { id: '5', name: 'Product E', price: '$50.00', description: 'Description of Product E' },
];

export default function Products() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [filteredProduct, setFilteredProduct] = useState(products);

    const handleSearch = (text) => {
        setSearch(text);
        if (text) {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(text.toLowerCase()) ||
                product.price.includes(text) ||
                product.description.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredProduct(filtered);
            return
        }

        setFilteredProduct(products);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => router.push(`/product-details/${item.id}`)}
        >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.description}</Text>
        </TouchableOpacity>
    );

    return <SafeAreaView style={styles.container}>
        <View style={styles.filterContainer}>
            <TextInput
                style={styles.input}
                placeholder="Search by name, price or description"
                value={search}
                onChangeText={handleSearch}
            />
        </View>
        <View>
            <FlatList
                data={filteredProduct}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    </SafeAreaView>
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