import { Stack } from 'expo-router';

export default function Layout() {
  const headerShown = false;
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#526492' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Página Inicial' }} />
      <Stack.Screen name="client" options={{ headerShown }} />
      <Stack.Screen name="home" options={{ headerShown }} />
      <Stack.Screen name="products" options={{ headerShown }} />
      <Stack.Screen name="report" options={{ headerShown }} />
      <Stack.Screen name="sales" options={{ headerShown }} />
      <Stack.Screen name="sync" options={{ headerShown }} />
      <Stack.Screen name="box" options={{ headerShown }} />
    </Stack>
  );
}