import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Button, ActivityIndicator, Alert } from "react-native";
import firebase from "../database/firebase";

//Pantalla de Modificar y Eliminar
const UserDetailScreen = (props) => {
    const initialState = {
        id: '',
        name: '',
        email: '',
        phone: '',
    }

    const [user, setUser] = useState(initialState)

    const [loading, setloading] = useState(true);
    
    const getUserById = async (id) => {
        //Consulta
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({
            ...user,
            id: doc.id,
        });
        setloading(false);
    }

    useEffect(() => {
        getUserById(props.route.params.userId)
    }, []);

    const handleChangeText = (name, value) => {
        setUser({ ...user, [name]: value });
    };

    const deleteUser = async () => {
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId); //userId es el componente pasado por las pantallas
        await dbRef.delete();
        props.navigation.navigate('UsersListScreen');
    }

    const updateUser = async () => {
        const dbRef =  firebase.db.collection('users').doc(user.id);
        await dbRef.set({
            name: user.name,
            email: user.email,
            phone: user.phone,
        });
        setUser(initialState);
        props.navigation.navigate('UsersListScreen');
    }

    const openConfirmationAlert = () => {
        Alert.alert('Remove The User', 'Are you sure?', [
            {text: 'Yes', onPress: () => deleteUser()},
            {text: 'No', onPress: () => console.log(false)},
        ])
    }
    
    //Loader
    if(loading) {
        return(
            <View>
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        );
    }
    
    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Name User"
                    value={user.name}
                    onChangeText={(value) => handleChangeText("name", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Email User"
                    value={user.email}
                    onChangeText={(value) => handleChangeText("email", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Phone User"
                    value={user.phone}
                    onChangeText={(value) => handleChangeText("phone", value)}
                />
            </View>
            <View>
                <Button color="#19AC52" title="Update User" onPress={() => updateUser()} />
            </View>
            <View>
                <Button color="#E37399" title="Delete User" onPress={() => openConfirmationAlert()} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    }
});

export default UserDetailScreen;