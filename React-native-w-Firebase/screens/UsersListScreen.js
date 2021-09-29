import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button, ActivityIndicator } from "react-native";
import firebase from "../database/firebase";
import { ListItem, Avatar } from "react-native-elements";

//Lista todos los usuarios
const UsersListScreen = (props) => {
    const [users, setUsers] = useState([]);

    const [loading, setloading] = useState(true);

    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapshot => {

            const users = [];

            querySnapshot.docs.forEach(doc => {
                const {name, email, phone} = doc.data();
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                });
                setloading(false);
            });

            setUsers(users);
        });
    }, []);
    
    //Loader
    if(loading) {
        return(
            <View>
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        );
    }

    return(
        <ScrollView>
            <Button title="Create User" onPress={() => props.navigation.navigate("CreateUserScreen")} />
            {
                users.map(user => {
                    return(
                        <ListItem key={user.id} bottomDivider onPress={() => {
                            props.navigation.navigate('UserDetailScreen', {
                                userId: user.id
                            })
                        }}>
                            <ListItem.Chevron />
                            <Avatar
                                source={require('../img/avatar.jpg')} 
                                rounded
                            />
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })
            }
        </ScrollView>
    );
}

export default UsersListScreen;