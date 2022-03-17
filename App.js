import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BookScreen from "./src/screens/BooksScreen";
import BookDetailScreen from "./src/screens/BookDetailScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen name="Books" component={BookScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
