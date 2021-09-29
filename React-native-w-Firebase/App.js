import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Importamos las diferentes pantallas
import UsersListScreen from "./screens/UsersListScreen";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";

const MyStack = () => {
  //Se muestra el primer Stack.Screen y si se cierra muestra el siguiente
  return(
    <Stack.Navigator>
      <Stack.Screen name="UsersListScreen" component={UsersListScreen} options={{title: 'Users List'}} />
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title: 'Create a New User'}} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{title: 'User Detail'}} />
    </Stack.Navigator>
  );
}

const App = () => {
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default App;