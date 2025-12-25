import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      {/* Adding the Statusbar is claimed to resolve the color contrast issue from the <Tabs> root component in (tabs)\_layout.tsx page in line 10
          But I cannot tell the different.
      */}
      <StatusBar style='light' />
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
    </>
  );
}
