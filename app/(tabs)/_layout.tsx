import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerShown: false }}/>
      <Tabs.Screen name="login" options={{headerShown: false }}/>
    </Tabs>
  )
}