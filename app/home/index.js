import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const routes = [
    { name: 'Cliente', route: '/client', icon: require('../../assets/icon/client.png') },
    { name: 'Produto', route: '/products', icon: require('../../assets/icon/product.png') },
    { name: 'Vendas', route: '/sales', icon: require('../../assets/icon/sale.png') },
    { name: 'Relatório', route: '/report', icon: require('../../assets/icon/report.png') },
    { name: 'Caixa', route: '/box', icon: require('../../assets/icon/box.png') },
    { name: 'Sync', route: '/sync', icon: require('../../assets/icon/cloud-sync.png') }
];

export default function Home() {
    const router = useRouter();

    return <View style={styles.container}>
        <View style={styles.grid}>
            {routes.map(({ name, route, icon: Icon }) => (
                <TouchableOpacity
                    key={route}
                    style={styles.touchable}
                    onPress={() => router.push(route)}
                >
                    <LinearGradient
                        colors={['#526492', '#858EB5', '#fff']}
                        style={styles.gradient}
                        start={{ x: 1, y: 0.5 }}
                        end={{ x: 0.5, y: 1.5 }}
                    >
                        <View style={styles.box}>
                            <View style={styles.buttonIcon}>
                                {Icon && <Image source={Icon} style={styles.icon} />}
                            </View>
                            <Text style={styles.buttonText}>{name}</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            ))}
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 20,
        gap: 20,
    },
    touchable: {
        width: '43%',
        height: 200,
        margin: 5,
        borderRadius: 5,

    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '100%',
        height: '100%',
    },
    box: {
        width: '95%',
        height: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderBlockColor: '#858EB5',
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#00000',
        fontSize: 20,
        border: '1px solid #fff',
    },
    buttonIcon: {
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        height: '70%',
        width: '90%',
        backgroundColor: '#fff',

    },
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        backgroundColor: '#fff',
    },
});