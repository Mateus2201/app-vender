import { Stack } from 'expo-router';

export default function NewClientLayout() {
    return <Stack
        screenOptions={{
            headerStyle: { backgroundColor: '#858EB5' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}
    >
        <Stack.Screen name="index" options={{ title: 'Novo Cliente' }} />
    </Stack>
}