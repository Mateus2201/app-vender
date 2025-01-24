import { StyleSheet, Text, View } from 'react-native';
// import Home from './home';
import { Button } from 'react-native';
import { useRouter } from 'expo-router';


export default function App() {
    const router = useRouter();

    return <View style={styles.container}>
        <Text>Home Screen</Text>

        <Button
            title="Go to Home"
            onPress={() => router.push('/home')}
        />
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});