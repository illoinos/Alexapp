import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        title: "Нүүр",
        headerStyle: {
          // backgroundColor: '#f4511e',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="movies"
        options={{
          title: "Киноны жагсаалт",
        }}
      />
      <Stack.Screen
        name="tic-tac"
        options={{
          title: "Тик так тоглоом",
        }}
      />
    </Stack>
  );
}
